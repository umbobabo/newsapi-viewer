import React, { Component } from "react";
import Loader from "./components/loader";
import ArticlesList from "./components/article-list";
import SearchForm from "./components/search-form";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const { initialList, filterList } = require("./service/news-api");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    this.setState({
      articles: null
    });
    const q = event.target.querySelector("[name='q']").value;
    event.preventDefault();
    fetch(filterList(q))
      .then(res => res.json())
      .then(({ articles }) => {
        this.setState({ articles });
      });
  }

  componentDidMount() {
    fetch(initialList)
      .then(res => res.json())
      .then(({ articles }) => {
        this.setState({
          articles
        });
      });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit">
              News API Viewer
            </Typography>
          </Toolbar>
        </AppBar>
        <SearchForm submitHandler={this.submitHandler} />
        {this.state.articles ? (
          <ArticlesList articles={this.state.articles} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default App;
