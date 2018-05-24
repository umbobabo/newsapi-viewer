import React from "react";
import SimpleMediaCard from "./card";

export default function ArticlesList({ articles }) {
  const articlesList = articles.map((article, index) => {
    return (
      <li key={`article-${index}`}>
        <SimpleMediaCard article={article} />
      </li>
    );
  });

  return <ul>{articlesList}</ul>;
}
