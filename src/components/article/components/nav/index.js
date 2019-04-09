import './index.less';
import React, { Component } from 'react';
import cheerio from 'cheerio';

class Nav extends Component {
  state = {
    html: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.html !== prevProps.html) {
      this.generateNav();
    }
  }

  generateNav = () => {
    const content = this.props.html;
    const $ = cheerio.load(content);
    const title = $('h2,h3');
    let liArr = [];

    title.each((index, item) => {
      let _item = $(item);
      let className = item.name === 'h2' ? 'linkH2' : 'linkH3';

      liArr.push(`<li class="${className}"><a href="#${_item.text()}">${_item.text()}</a></li>`);
    });

    this.setState({ html: `<ul class="nav">${liArr.join('')}</ul>` });
  };

  render() {
    const { html } = this.state;

    return <div className="articleNav" dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

export default Nav;
