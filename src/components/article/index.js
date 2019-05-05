import './index.less';
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import Sidebar from './components/sidebar';
import Nav from './components/nav';
import * as utils from '@/utils/utils';
import Link from 'umi/link';

let content = {};

class Article extends Component {
  state = {
    html: '',
    backUrl: ''
  };

  constructor(props) {
    super(props);
    this.formatArticleList();
    this.loadData();
  }

  componentDidMount() {
    this.getBackUrl();
  }

  componentDidUpdate(prevProps) {
    const articleName = this.props.match.params.article;
    const prevArticleName = prevProps.match.params.article;

    if (articleName !== prevArticleName) {
      this.loadData();
    }
  }

  formatArticleList = () => {
    try {
      this.props.docs.forEach(item => {
        if (typeof item === 'object' && item[1]) {
          content[`_${item[1]}`] = item[2];
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  loadData = async () => {
    utils.showLoading();

    try {
      const articleName = this.props.match.params.article;
      const html = await content[`_${articleName}`]();
      this.setState({ html: html.default });
    } catch (err) {
      console.log(err);
    }

    utils.hideLoading();
  };

  getBackUrl = () => {
    let routes = {};
    let curUrl = this.props.match.path.split('/');

    window.g_routes.forEach(item => {
      routes[item.path] = true;
    });

    curUrl.pop();
    curUrl.shift();

    while (!routes['/' + curUrl.join('/')]) {
      curUrl.pop();
    }

    this.setState({
      backUrl: '/' + curUrl.join('/')
    });
  };

  render() {
    const { html, backUrl } = this.state;
    const { docs } = this.props;

    return (
      <div className="articleLayout" id="articleLayout">
        <Sidebar docs={docs} />
        <div className="articleContent" dangerouslySetInnerHTML={{ __html: html }} />
        <Nav html={html} />

        <div className="toolBar">
          <Link to="/">首页</Link>
          {backUrl && backUrl !== '/' && <Link to={backUrl}>返回</Link>}
        </div>
      </div>
    );
  }
}

export default withRouter(Article);
