import axios from "axios";

export const fetchArticles = async (query) => {
    const results = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${'gCkFzOYZuOscSLOV6GWLILZdioJ-60nmBJSEs0d3bTA'}&query=${query}`);

    return results;
}