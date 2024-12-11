import { motion, useScroll } from "motion/react";
import "./styles/bar.css"

export default function LoadingBar(){
    const { scrollYProgress } = useScroll();
    return (      
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    );
}