import './index.less';
import React, { Component } from 'react';
import $ from 'jquery';

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
    const title = $(`<div>${content}</div>`).find('h2,h3');
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
