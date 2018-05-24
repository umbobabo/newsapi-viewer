"use strict";
const React = require("react");
const App = require("../../App").default;
const assets = require("../../../build/asset-manifest.json");
class View extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.articles[0].title}</title>
          <link
            rel="stylesheet"
            type="text/css"
            href={`${assets["main.css"]}`}
          />
        </head>
        <body>
          <div id="root">
            <App />
          </div>
          <script
            id="app-state"
            dangerouslySetInnerHTML={{
              __html: `window.state = ${JSON.stringify(this.props.articles)}`
            }}
          />
          <script src={`${assets["main.js"]}`} />
        </body>
      </html>
    );
  }
}

module.exports = View;
