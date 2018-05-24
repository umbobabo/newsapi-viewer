import React from "react";
import ArticlesList from "./article-list";
import renderer from "react-test-renderer";

const article = {
  source: {
    id: "the-telegraph",
    name: "The Telegraph"
  },
  author: "Jhonny Deep",
  title: "test test test test",
  description: "A description",
  url: "https://www.telegraph.co.uk/news/2018/04/25/test-test-test-test/",
  urlToImage: "http://anUrl",
  publishedAt: "2018-04-25T16:07:20Z"
};

const articles = [article, article, article];

describe("ArticlesList", () => {
  it("renders a list of articles", () => {
    const tree = renderer.create(<ArticlesList articles={articles} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
