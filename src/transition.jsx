import { motion } from "framer-motion";
import udinus from "./assets/logo/udinus.png";

const transition = (OgComponent) => {
  return () => {
    return (
      <>
        <OgComponent />
        <motion.div
          className="fixed top-0 left-0 w-full h-screen origin-right bg-[#092635] z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center items-center h-full">
            <img src={udinus} alt="udinus" className="w-40" />
          </div>
        </motion.div>
        <motion.div
          className="fixed top-0 left-0 w-full h-screen origin-left bg-[#092635] z-50"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };
};

export default transition;
