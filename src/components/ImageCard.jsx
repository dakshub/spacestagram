import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { MediaCard, Icon, Toast } from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";
import { motion } from "framer-motion";

const ImageCard = ({ imgId, roverName, camera, earthDate, imgSrc }) => {
  const [isImageLiked, setIsImageLiked] = useState(isImageStored(imgId));
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);
  const toastMarkup = active ? (
    <Toast
      content="Image link copied"
      onDismiss={toggleActive}
      duration={4500}
    />
  ) : null;

  // MediaCard animation properties from framer-motion
  const mediaCardAnimation = {
    scale: [1.2, 0.98],
    transition: { duration: 0.5 },
  };

  /*
   * Check if image was previously stored in localStorage
   */
  function isImageStored(id) {
    if (localStorage.getItem(id)) {
      return true;
    }
    return false;
  }

  /*
   * Add or remove image in localStorage and update the like state
   */
  function updateLocalStorage(id) {
    if (localStorage.getItem(id)) {
      localStorage.removeItem(id);
      setIsImageLiked(!isImageLiked);
    } else {
      localStorage.setItem(id, id);
    }
  }

  return (
    <motion.div animate={mediaCardAnimation}>
      <MediaCard
        key={imgId}
        title={`${roverName} rover - ${camera}`}
        description={earthDate}
        secondaryAction={{
          destructive: isImageLiked,
          icon: (
            <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 1 }}>
              <Icon
                accessibilityLabel="Like/Unlike image"
                source={HeartMajor}
              />
            </motion.div>
          ),
          onAction: () => {
            setIsImageLiked(!isImageLiked);
            updateLocalStorage(imgId);
          },
        }}
        popoverActions={[
          {
            content: "Copy image link",
            onAction: () => {
              navigator.clipboard.writeText(imgSrc);
              toggleActive();
            },
          },
        ]}
      >
        <img className="align-and-scale" alt="NASA img" src={`${imgSrc}`} />
        {toastMarkup}
      </MediaCard>
    </motion.div>
  );
};

ImageCard.propTypes = {
  imgId: PropTypes.number.isRequired,
  roverName: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
  earthDate: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

ImageCard.defaultProps = {
  imgId: 0,
  roverName: "",
  camera: "",
  earthDate: "",
  imgSrc: "",
};

export default ImageCard;
