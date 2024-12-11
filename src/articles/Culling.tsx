import React from "react";
import culling from '../assets/culling.png'
import "prismjs/themes/prism-okaidia.css"; // Add any preferred Prism.js theme


const Header: React.FC = () => (
  <section className="min-h-[calc(100vh-3.25rem)] bg-gradient-to-r from-green-500 to-blue-500 py-20 flex items-center">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold">Frustum Culling</h1>
    <p className="mt-4 text-lg md:text-2xl">
    Frustum culling is a 3D graphics optimization technique that discards objects outside the camera's view frustum. This reduces unnecessary computational load by rendering only visible objects.
    </p>
  </div>
</section>
);

// New section for displaying the image (frustum.png)
const FrustumImageSection: React.FC = () => (
  <section className="py-20 bg-gray-800">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-center mb-10">Prisma Engine: Frustum Culling</h2>
      <p className="text-lg text-gray-300 mb-8">
        This image provides a visual overview of frustum culling in Prisma Engine:
      </p>
      <img
          src={culling}
          alt="Frustum Culling"
          className="rounded-lg mb-4 object-contain max-w-full mx-auto"
        />
    </div>
  </section>
);

const RenderingPipeline: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Rendering Pipeline</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        In my engine, I utilize <code>glMultiDrawIndirect</code> to minimize CPU overhead by offloading the work to the GPU. When implementing frustum culling, i used the
        an efficient approach, that uses an atomic counter to track the number of instances to draw and <code>glMultiDrawIndirectCount</code>.
      </p>
    </div>
  </section>
);

const SetupSection: React.FC = () => (
  <section className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Setup</h2>
      <p className="mt-4 text-white">1. Generate the necessary buffer objects:</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
        <li><strong>m_indirectDraw:</strong> Stores draw commands.</li>
        <li><strong>m_indirectDrawCopy:</strong> Used as a copy of the instances of the scene.</li>
        <li><strong>m_sizeAtomic:</strong> An atomic counter buffer for dynamic tracking of culled meshes.</li>
      </ul>

      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">
        <pre className="text-white language-cpp">
          {`glGenBuffers(1, &m_indirectDraw);
glGenBuffers(1, &m_indirectDrawCopy);
glGenBuffers(1, &m_sizeAtomic);`}
        </pre>
      </div>

      <p className="mt-4 text-white">
        2. Configure the atomic counter buffer: This buffer is bound to the GL_ATOMIC_COUNTER_BUFFER target and linked to binding point 0. The buffer size is set to hold one unsigned integer.
      </p>

      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">
        <pre className="text-white language-cpp">
          {`glBindBuffer(GL_ATOMIC_COUNTER_BUFFER, m_sizeAtomic);
glBindBufferBase(GL_ATOMIC_COUNTER_BUFFER, 0, m_sizeAtomic);
glBufferData(GL_ATOMIC_COUNTER_BUFFER, sizeof(unsigned int), NULL, GL_DYNAMIC_DRAW);
glBindBuffer(GL_ATOMIC_COUNTER_BUFFER, 0);`}
        </pre>
      </div>

      <p className="mt-4 text-white">
        3. Bind and configure the indirect draw copy buffer: This prepares the buffer to store draw commands with offsets. The offsets are calculated in the next step.
      </p>

      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">
        <pre className="text-white language-cpp">
          {`glBindBuffer(GL_DRAW_INDIRECT_BUFFER, m_indirectDrawCopy);`}
        </pre>
      </div>

      <p className="mt-4 text-white">
        4. Initialize the draw commands: Each mesh is processed to create a draw command, which specifies the number of indices, instance count, and vertex offsets for rendering. These commands are stored in a vector.
      </p>

      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">
        <pre className="text-white language-cpp">
          {`m_currentIndex = 0;
m_currentVertex = 0;

for (const auto& mesh : meshes) {
    const auto& indices = mesh->verticesData().indices;
    const auto& vertices = mesh->verticesData().vertices;

    DrawElementsIndirectCommand command{};
    command.count = static_cast<GLuint>(indices.size());
    command.instanceCount = mesh->visible();
    command.firstIndex = m_currentIndex;
    command.baseVertex = m_currentVertex;
    command.baseInstance = 0;

    m_drawCommands.push_back(command);
    m_currentIndex += indices.size();
    m_currentVertex += vertices.size();
}`}
        </pre>
      </div>

      <p className="mt-4 text-white">
        5. Upload draw commands to buffers: The commands are uploaded to both the copy buffer and the primary indirect draw buffer for use in rendering.
      </p>

      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">
        <pre className="text-white language-cpp">
          {`glBindBuffer(GL_ARRAY_BUFFER, m_indirectDrawCopy);
glBindBufferBase(GL_SHADER_STORAGE_BUFFER, m_indirectCopySSBOId, m_indirectDrawCopy);
glBufferData(GL_DRAW_INDIRECT_BUFFER, m_drawCommands.size() * sizeof(DrawElementsIndirectCommand), m_drawCommands.data(), GL_DYNAMIC_DRAW);

glBindBuffer(GL_DRAW_INDIRECT_BUFFER, m_indirectDraw);
glBindBuffer(GL_ARRAY_BUFFER, m_indirectDraw);
glBindBufferBase(GL_SHADER_STORAGE_BUFFER, m_indirectSSBOId, m_indirectDraw);
glBufferData(GL_DRAW_INDIRECT_BUFFER, m_drawCommands.size() * sizeof(DrawElementsIndirectCommand), nullptr, GL_DYNAMIC_DRAW);`}
        </pre>
      </div>
    </div>
  </section>
);


const ComputeShaderSection: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Compute Shader</h2>
      <p className="mt-4">
        Let's dive into the compute shader, which is the most interesting part. The compute shader uses a local size of 1 and dispatches based on the number of meshes, e.g., <code>dispatch(meshes.size(), 1, 1);</code>.
        The required SSBOs and UBOs are defined as follows:
      </p>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">

      <pre className="text-white language-cpp">
        {`#version 460 core
layout(local_size_x = 1, local_size_y = 1, local_size_z = 1) in;

struct InstanceData {
    unsigned int count;
    unsigned int instanceCount;
    unsigned int firstIndex;
    unsigned int baseVertex;
    unsigned int baseInstance;
};

layout(std430, binding = 0) buffer DrawElementsIndirectMesh {
    InstanceData instanceData[];
};

layout(std430, binding = 1) buffer DrawElementsIndirectMeshCopy {
    InstanceData instanceDataCopy[];
};

layout(std430, binding = 2) buffer Matrices {
    mat4 modelMatrices[];
};
layout(std140, binding = 0) uniform MeshData {
  mat4 view;
  mat4 projection;
};

layout(std430, binding = 3) buffer CameraData {
  float zNear;
  float zFar;
  float fovY;
  float aspect;
};
struct AABB {
  vec4 center;  // xyz: center position, w: padding
  vec4 extents; // xyz: extents (half-size), w: padding
};

layout(std430, binding = 4) buffer AABBData {
  AABB aabbData[];
};

layout(binding = 0) uniform atomic_uint counterSize;
`}
      </pre>
      </div>

      <p className="mt-4">After gathering the data, the AABB transform function that makes the AABB data from local to model space is applied:</p>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">

      <pre className="text-white language-cpp">
        {`AABB transformAABB(AABB localAABB, mat4 modelMatrix) {
    vec3 worldCenter = vec3(modelMatrix * localAABB.center);
    vec3 axisX = vec3(modelMatrix[0][0], modelMatrix[1][0], modelMatrix[2][0]);
    vec3 axisY = vec3(modelMatrix[0][1], modelMatrix[1][1], modelMatrix[2][1]);
    vec3 axisZ = vec3(modelMatrix[0][2], modelMatrix[1][2], modelMatrix[2][2]);

    vec3 worldExtents = abs(localAABB.extents.xyz.x * axisX) + 
                        abs(localAABB.extents.xyz.y * axisY) + 
                        abs(localAABB.extents.xyz.z * axisZ);
    
    return AABB(vec4(worldCenter, 1.0), vec4(worldExtents, 0.0));
}
`}
      </pre>
      </div>
      <p className="mt-4">The frustum check function works as follows: First, we retrieve the plane normals. For each plane, we calculate the distance from the center, considering the projected radius. We then verify whether the point is within the frustum by ensuring it is not outside the projected bounds. Here's the code snippet:</p>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">

      <pre className="text-white language-cpp">
        {`bool isAABBInFrustum(mat4 viewProjection, AABB worldAABB) {
    vec3 absExtents = worldAABB.extents.xyz;

    // Loop through all 6 planes
    for (int i = 0; i < 6; ++i) {
        vec3 planeNormal;
        float planeOffset;

        if (i == 0) { // Left plane
            planeNormal = vec3(viewProjection[0][3] + viewProjection[0][0],
                viewProjection[1][3] + viewProjection[1][0],
                viewProjection[2][3] + viewProjection[2][0]);
            planeOffset = viewProjection[3][3] + viewProjection[3][0];
        }
        else if (i == 1) { // Right plane
            planeNormal = vec3(viewProjection[0][3] - viewProjection[0][0],
                viewProjection[1][3] - viewProjection[1][0],
                viewProjection[2][3] - viewProjection[2][0]);
            planeOffset = viewProjection[3][3] - viewProjection[3][0];
        }
        else if (i == 2) { // Bottom plane
            planeNormal = vec3(viewProjection[0][3] + viewProjection[0][1],
                viewProjection[1][3] + viewProjection[1][1],
                viewProjection[2][3] + viewProjection[2][1]);
            planeOffset = viewProjection[3][3] + viewProjection[3][1];
        }
        else if (i == 3) { // Top plane
            planeNormal = vec3(viewProjection[0][3] - viewProjection[0][1],
                viewProjection[1][3] - viewProjection[1][1],
                viewProjection[2][3] - viewProjection[2][1]);
            planeOffset = viewProjection[3][3] - viewProjection[3][1];
        }
        else if (i == 4) { // Near plane
            planeNormal = vec3(viewProjection[0][3] + viewProjection[0][2],
                viewProjection[1][3] + viewProjection[1][2],
                viewProjection[2][3] + viewProjection[2][2]);
            planeOffset = viewProjection[3][3] + viewProjection[3][2];
        }
        else if (i == 5) { // Far plane
            planeNormal = vec3(viewProjection[0][3] - viewProjection[0][2],
                viewProjection[1][3] - viewProjection[1][2],
                viewProjection[2][3] - viewProjection[2][2]);
            planeOffset = viewProjection[3][3] - viewProjection[3][2];
        }

        // Normalize the plane
        float length = length(planeNormal);
        planeNormal /= length;
        planeOffset /= length;

        // Compute the distance from the AABB center to the plane
        float distance = dot(worldAABB.center.xyz, planeNormal) + planeOffset;

        // Compute the projected radius of the AABB onto the plane
        float projectedRadius = dot(absExtents, abs(planeNormal));

        // If the AABB is completely outside this plane, cull it
        if (distance + projectedRadius < 0.0) {
            return false;
        }
    }
    return true;
}
`}

      </pre>
      </div>
      <p className="mt-4">The main will check and add to the atomic counter the data:</p>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">

      <pre className="text-white language-cpp">
        {`int main(){

    uint index = gl_GlobalInvocationID.x;

    // Compute the view-projection matrix
    mat4 viewProjection = projection * view;

    // Transform the AABB to world space
    AABB worldAABB = transformAABB(aabbData[index], modelMatrices[index]);

    // Perform frustum culling
    if (isAABBInFrustum(viewProjection, worldAABB)) {
        uint culledIdx = atomicCounterIncrement(counterSize);
        // Copy data
        instanceData[culledIdx] = instanceDataCopy[index];
    }
}

`}

      </pre>
      </div>
    </div>
  </section>
);

const RenderingSection: React.FC = () => (
  <section className="py-20 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Rendering</h2>
      <p className="mt-4">
        Rendering with <code>GlMultidrawIndirectCount</code> is done as follows:
      </p>
      <div className="overflow-x-auto bg-gray-700 p-4 rounded-md">

      <pre className="text-white language-cpp">
{`m_vao->bind();
glBindBuffer(GL_DRAW_INDIRECT_BUFFER, m_indirectDraw);
glBindBuffer(GL_PARAMETER_BUFFER_ARB, m_sizeAtomic);
glBindBufferBase(GL_SHADER_STORAGE_BUFFER, m_indirectSSBOId, m_indirectDraw);
glMultiDrawElementsIndirectCountARB(GL_TRIANGLES, GL_UNSIGNED_INT, nullptr, 0, m_drawCommands.size(), 0);
glBindBuffer(GL_PARAMETER_BUFFER_ARB, 0);
glBindBuffer(GL_DRAW_INDIRECT_BUFFER, 0);
        `}

      </pre>
      </div>
    </div>
  </section>
);

export default function CullingPage()
{

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <FrustumImageSection/>
      <RenderingPipeline />
      <SetupSection />
      <ComputeShaderSection />
      <RenderingSection/>
    </div>
  );
}
