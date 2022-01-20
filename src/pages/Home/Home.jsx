import React from "react";
import { MediaCard } from "@shopify/polaris";
import { motion } from "framer-motion";
import OuterSpaceIllustration from "../../images/svg/OuterSpaceIllustration.svg";
import "./Home.css";

const Home = () => {
  // animation for the empty card from framer-motion
  const animation = { scale: [1.2, 1], transition: { duration: 0.5 } };
  return (
    <div className="media-card-container">
      <motion.div animate={animation}>
        <MediaCard
          title="Spacestagram: Image-sharing from the final frontier"
          primaryAction={{
            content: "Begin",
            url: "/images",
          }}
          description="Like your favourite images from NASA!"
          portrait={true}
        >
          <img
            alt="Girl in outer space"
            className="align-and-scale"
            src={OuterSpaceIllustration}
          />
        </MediaCard>
      </motion.div>
    </div>
  );
};

export default Home;
