import React from 'react';
import './App.css';
import quotes from './quotes';

const color = [
  '#2c3e50',
  '#e74c3c',
  '#27ae60',
  '#472e32',
  '#f39c12',
  '#9b59b6'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null,
      color: null
    };
    this.nextQuote = this.nextQuote.bind(this);
  }

  random(max) {
    return Math.floor(Math.random() * max);
  }

  nextQuote() {
    this.randomQuote();
    this.randomColor();
  }

  randomQuote() {
    let i = this.random(quotes.length);
    this.setState({
      quote: quotes[i].quote,
      author: quotes[i].author
    });
  }

  randomColor() {
    
    let i = this.random(color.length);
    this.setState({
      color: color[i]
    });
  }

  componentDidMount() {
    this.randomQuote();
    this.randomColor();
  }

  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div id="quote-box">
        <div id="text" style={{ color: this.state.color }}>
          {this.state.quote}
        </div>
        <div id="author" style={{ color: this.state.color }}>
          – {this.state.author}
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${this.state.quote}" - ${this.state.author}`}
            rel="noopener noreferrer"
            target="_blank"
            style={{ backgroundColor: this.state.color }}
          >
            Tweet
          </a>
          <button
            id="new-quote"
            onClick={this.nextQuote}
            style={{ backgroundColor: this.state.color }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
