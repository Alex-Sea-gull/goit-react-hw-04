const ImageCard = ({ article, openModal }) => {
  return (
    <div
      onClick={() => {
        console.log("Image clicked:", article.urls.small);
        openModal(article.urls.regular);
      }}
    >
      <img src={article.urls.small} alt={article.alt_description} />
    </div>
  );
};

export default ImageCard;
