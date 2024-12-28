const ImageCard = ({ article }) => {
  return (
    <div>
      <img src={article.urls.small} alt={article.alt_description} />
    </div>
  );
};

export default ImageCard;
