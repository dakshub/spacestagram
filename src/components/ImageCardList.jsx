import React from "react";
import PropTypes from "prop-types";
import { Frame } from "@shopify/polaris";
import ImageCard from "./ImageCard";

const ImageCardList = ({ imagesData }) => {
  return (
    <Frame>
      {imagesData.map((element, key) => (
        <ImageCard
          key={element.id + key}
          imgId={element.id}
          roverName={element.rover.name}
          camera={element.camera.full_name}
          earthDate={element.earth_date}
          imgSrc={element.img_src}
        ></ImageCard>
      ))}
    </Frame>
  );
};

ImageCardList.propTypes = {
  imagesData: PropTypes.array.isRequired,
};

ImageCardList.defaultProps = {
  imagesData: [],
};

export default ImageCardList;
