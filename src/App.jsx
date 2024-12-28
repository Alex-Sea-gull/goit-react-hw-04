import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBAr/SearchBar";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchArticles } from "./components/services/api";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchValue) return;

    const getArticlesData = async () => {
      try {
        const results = await fetchArticles(searchValue);
        setArticles(results.data.results);
      } catch (error) {
        console.log("Помилка завантаження даних", error);
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
    </div>
  );
}

export default App;
