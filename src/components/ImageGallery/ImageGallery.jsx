import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ articles }) => {
  return (
    <ul className={s.gallery}>
      {/* Набір елементів списку із зображеннями */}
      {articles.map((article) => (
        <li key={article.id} className={s.galleryItem}>
          <ImageCard article={article} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
