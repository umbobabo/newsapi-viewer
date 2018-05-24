import React, { Component } from "react";
import Loader from "./components/loader";
import ArticlesList from "./components/article-list";
import SearchForm from "./components/search-form";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { name } from "./config/app";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles || null
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    this.setState({
      articles: null
    });
    const q = event.target.querySelector("[name='q']").value;
    event.preventDefault();

    const url = new URL(window.location.href),
      params = { q, format: "json" };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    fetch(url)
      .then(res => res.json())
      .then(({ articles }) => {
        this.setState({ articles });
      });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {name}
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
