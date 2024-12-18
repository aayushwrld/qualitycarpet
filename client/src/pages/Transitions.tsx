import { motion } from "framer-motion";
import { ReactNode } from "react";

const animationConfiguration = {
    initial: { opacity: 0, filter: "blur(3px)" }, 
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0 },
};

type TransitionsProps = {
    children: ReactNode;
};

const Transitions = ({ children }: TransitionsProps) => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default Transitions;