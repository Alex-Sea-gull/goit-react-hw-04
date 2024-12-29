import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchArticles } from "./components/services/api";
import Loader from "./components/Loader/Loader";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        const fetchResult = await fetchArticles(searchValue);
        setArticles(fetchResult.data.results);
        console.log(fetchResult);
      } catch (error) {
        console.log("Помилка завантаження даних", error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [searchValue]);

  // Фукнція обробки поля пошуку(сабміта), приймає та оновляє
  const getSubmitValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchBar onSubmit={getSubmitValue} />
      <ImageGallery articles={articles} />
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
