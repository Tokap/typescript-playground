import * as React from "react";
import Login from "../extended/Login";

class ProductFaq extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Product Faq.</h1>
          <h2 className="App-content">
            Here are some words regarding Product FAQ.
          </h2>
          <p>And some additional text.</p>

          <Login targetUrl={"/login"} />
        </header>
      </div>
    );
  }
}

export default ProductFaq;
