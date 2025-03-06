import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PhotoCardProps {
  imageUrl: string;
  altText: string;
  classname: string;
  draggable?: boolean;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  imageUrl,
  altText,
  classname,
  draggable,
}) => {
  return (
    <motion.div
      className="photo-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LazyLoadImage
        alt={altText}
        src={imageUrl}
        effect="blur"
        width="100%"
        height="auto"
        className={`${classname}`}
        draggable={draggable}
      />
    </motion.div>
  );
};

export default PhotoCard;
