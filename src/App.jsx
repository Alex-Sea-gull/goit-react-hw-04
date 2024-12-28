import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBAr/SearchBar";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=gCkFzOYZuOscSLOV6GWLILZdioJ-60nmBJSEs0d3bTA"
      )
      .then((res) => setArticles(res.data));
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
