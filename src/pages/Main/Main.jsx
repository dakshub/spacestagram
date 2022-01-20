import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Page,
  Layout,
  TextStyle,
  Icon,
  Card,
  SkeletonThumbnail,
  SkeletonBodyText,
  SkeletonPage,
} from "@shopify/polaris";
import { CircleDisableMinor } from "@shopify/polaris-icons";
import ImageCardList from "../../components/ImageCardList";
import "./Main.css";

const Main = () => {
  const [isLoadingImages, setIsLoadingImages] = useState(false);
  const [isLoadingMoreImages, setIsLoadingMoreImages] = useState(false);
  const [imagesData, setImagesData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Load images as soon as component loads
  useEffect(() => {
    const loadImages = async () => {
      setIsLoadingImages(true);
      await axios
        .get(`${process.env.REACT_APP_API_URL}&page=1`)
        .then((response) => {
          if (response.data.photos.length === 0) {
            setError("Images not found!");
            setIsLoadingImages(false);
          } else {
            setImagesData(response.data.photos);
            setIsLoadingImages(false);
          }
        })
        .catch((e) => {
          setError(`Server error - ${e}`);
          setIsLoadingImages(false);
        });
    };
    // Fetches images from the API and updates the states
    loadImages();
  }, []);

  /*
   * Fetches more images from the API and updates the states
   */
  const loadMoreImages = async () => {
    setIsLoadingMoreImages(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}&page=${page + 1}`)
      .then((response) => {
        if (response.data.photos.length === 0) {
          setError("End of results!");
          setIsLoadingMoreImages(false);
        } else {
          imagesData.push(...response.data.photos);
          setPage(page + 1);
          setIsLoadingMoreImages(false);
        }
      })
      .catch((e) => {
        setError(`Server error - ${e}`);
        setIsLoadingMoreImages(false);
      });
  };

  // Loading state, a skeleton page is shown
  if (isLoadingImages) {
    return (
      <SkeletonPage title="" breadcrumbs>
        <Layout>
          {[...Array(4)].map((e, i) => (
            <Layout.Section key={i}>
              <Card>
                <Card.Section>
                  <SkeletonThumbnail size="large" />
                </Card.Section>
                <Card.Section>
                  <SkeletonBodyText lines={1} />
                </Card.Section>
              </Card>
            </Layout.Section>
          ))}
        </Layout>
      </SkeletonPage>
    );
  }

  return (
    <Page
      title="Spacestagram"
      subtitle="Brought to you by NASA's Image API"
      breadcrumbs={[{ content: "Home", url: "/" }]}
    >
      <Layout>
        <Layout.Section>
          {imagesData && <ImageCardList imagesData={imagesData} />}
          {error ? (
            <div className="container">
              <TextStyle variation="negative">
                <Icon source={CircleDisableMinor} color="critical" />
                <p>{error}</p>
              </TextStyle>
            </div>
          ) : (
            <div className="container">
              <Button
                primary
                fullWidth
                loading={isLoadingMoreImages}
                onClick={() => loadMoreImages()}
              >
                Load more
              </Button>
            </div>
          )}
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Main;
