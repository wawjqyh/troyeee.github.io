import './index.less';
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import Sidebar from './components/sidebar';
import Nav from './components/nav';
import * as utils from '@/utils/utils';

const content = {};

class Article extends Component {
  state = {
    html: ''
  };

  constructor(props) {
    super(props);

    props.docs.forEach(item => {
      if (typeof item === 'object') content[item[1]] = item[2];
    });

    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const articleName = this.props.match.params.article;
    const prevArticleName = prevProps.match.params.article;

    if (articleName !== prevArticleName) {
      this.loadData();
    }
  }

  loadData = async () => {
    try {
      utils.showLoading();
      const articleName = this.props.match.params.article;
      const html = await content[articleName]();
      this.setState({ html: html.default });
      utils.hideLoading();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { html } = this.state;
    const { docs } = this.props;

    return (
      <div className="articleLayout">
        <Sidebar docs={docs} />
        <div className="articleContent" dangerouslySetInnerHTML={{ __html: html }} />
        <Nav html={html} />
      </div>
    );
  }
}

export default withRouter(Article);
