import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://api.spaceflightnewsapi.net/v3/articles/${id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
    </div>
  );
};

export default ArticleDetails;
