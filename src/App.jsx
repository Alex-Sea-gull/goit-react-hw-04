import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchArticles } from "./components/services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [articles, setArticles] = useState([]); // зображення
  const [searchValue, setSearchValue] = useState(""); // строка пошуку
  const [isLoading, setIsLoading] = useState(false); // лоадер
  const [isError, setIsError] = useState(false); // помилка
  const [page, setPage] = useState(1); // номер сторінки

  useEffect(() => {
    if (!searchValue) return;

    const getArticlesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        if (page === 1) setArticles([]);

        const fetchResult = await fetchArticles(searchValue, page);
        setArticles((prev) => [...prev, ...fetchResult.data.results]);
        console.log(fetchResult);
      } catch (error) {
        setIsError(true);
        console.log("Помилка завантаження даних", error);
      } finally {
        setIsLoading(false);
      }
    };
    getArticlesData();
  }, [searchValue, page]);

  // Фукнція обробки поля пошуку(сабміта), приймає та оновляє
  const getSubmitValue = (value) => {
    setSearchValue(value);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={getSubmitValue} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {articles.length > 0 && <ImageGallery articles={articles} />}
      {articles.length > 0 && <LoadMoreBtn onLoadMore={handleChangePage} />}
    </div>
  );
}

export default App;
