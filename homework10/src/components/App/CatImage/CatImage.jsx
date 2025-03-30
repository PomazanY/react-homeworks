import styles from "./CatImage.module.css";
import { getImages } from "../../../api/images";
import { useEffect, useState } from "react";

const CatImage = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async () => {
    try {
      setLoading(true);
      const data = await getImages();
      setImage(data.url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Random Cat Image</h1>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {image && <img className={styles.img} src={image} alt="Random cat" />}
      <button className={styles.btn} onClick={fetchImage}>Load New Image</button>
    </div>
  );
};

export default CatImage;