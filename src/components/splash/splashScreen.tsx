import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GridLoader } from "react-spinners";
import "./splashScreen.scss";

const imageUrls = [
  "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067256/IMG_4508_g04rjy.webp",
  "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067257/IMG_4959_sd0abm.webp",
  "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067257/IMG_4930_o4liip.webp",
  "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740067256/IMG_4799_tif5pp.webp",
  "https://res.cloudinary.com/dw27jvt6i/image/upload/v1740075557/IMG_20250208_004208_8701_dosxxa.webp",
];

const MIN_DISPLAY_TIME = 2000;

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [loaded, setLoaded] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.allSettled(
        imageUrls.map(
          (url) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = resolve;
            })
        )
      );
      setLoaded(imageUrls.length);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (loaded === imageUrls.length) {
      const elapsed = Date.now() - startTimeRef.current;
      const delay = Math.max(MIN_DISPLAY_TIME - elapsed, 0);
      setTimeout(onComplete, delay);
    }
  }, [loaded, onComplete]);

  return (
    <AnimatePresence>
      {loaded < imageUrls.length && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="loader-wrapper">
            <GridLoader color="#fff" size={30} />
          </div>
          <motion.div
            className="progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: `${(loaded / imageUrls.length) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
