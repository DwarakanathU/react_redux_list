import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const DisplayData = () => {
  const [innewsData, setInNewsData] = useState([]);
  console.log(innewsData);
  useEffect(() => {
    handleSearch();
  }, []);
  const handleSearch = async () => {
    const newsData = await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5a866384c2884f3c805d02a77fef4f60"
      )
      .then((res) => {
        setInNewsData(res.data.articles);
      });
    return newsData;
  };

  return (
    <ul>
      {innewsData.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
};

export default DisplayData;
