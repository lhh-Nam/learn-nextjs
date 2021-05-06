import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Images.module.scss";
import { connect } from "react-redux";
import { images } from "../next.config";
import { loadImages } from "../redux/actions/ImageAction";
import Button from "../components/Button";

// export const getStaticProps = async () => {
//   const key =
//     "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

//   const res = await fetch(
//     `https://api.unsplash.com/photos/?client_id=${key}&per_page=28`
//   );

//   const data = await res.json();

//   return {
//     props: { imageList: data },
//   };
// };

const mapStateToProps = ({ isLoading, images, error }) => {
  return {
    isLoading,
    images,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

const Images = ({ imageList, loadImages, images, error, isLoading }) => {
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className={styles.imagesContainer}>
      <section className={styles.grid}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              Math.ceil(img.height / img.width) === 1
                ? `${styles.span1}`
                : Math.ceil(img.height / img.width) === 2
                ? `${styles.span2}`
                : `${styles.span3}`
            }`}
          >
            {/* <Image
              //loader={myLoader}
              src={img.urls.small}
              alt={img.user.username}
              width={img.width}
              height={img.height}
            /> */}

            <img src={img.urls.small} alt={img.user.username} />
          </div>
        ))}
      </section>

      {error && <div className={styles.error}>{JSON.stringify(error)}</div>}
      <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
        Load more
      </Button>
    </div>
  );
};

// const mapStateToProps = ({ isLoading, images, error }) => {
//   {
//     isLoading, images, error;
//   }
// };

export default connect(mapStateToProps, mapDispatchToProps)(Images);

//export default Images;
