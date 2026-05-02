import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <h3 className='text-center mt-5'>Loading...</h3>;
  }

  return (
    <div>
      <h2 className='text-center'>
        Latest <span className='badge bg-danger'>{category.toUpperCase()}</span> News{" "}
      </h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {articles.map((news) => {
          const { title, description, urlToImage, url } = news;

          return (
            <NewsItem
              key={url}
              title={title || "No Title"}
              description={description || "No description available"}
              src={urlToImage || "https://via.placeholder.com/300"}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
