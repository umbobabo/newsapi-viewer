import React from "react";
import SimpleMediaCard from "./card";

export default function ArticlesList({ articles }) {
  const articlesList = articles.map(article => {
    return (
      <li>
        <SimpleMediaCard article={article} />
      </li>
    );
  });

  return <ul>{articlesList}</ul>;
}
