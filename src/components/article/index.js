import './index.less';
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import Sidebar from './components/sidebar';
import Nav from './components/nav';
import * as utils from '@/utils/utils';
import Link from 'umi/link';
// import { BackTop } from 'antd';

let content = {};
let routes = {};

class Article extends Component {
  state = {
    html: ''
  };

  constructor(props) {
    super(props);
    this.formatArticleList();
    this.formatRoutes();
    this.loadData();
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

  formatRoutes = () => {
    window.g_routes.forEach(item => {
      routes[item.path] = true;
    });
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

  goBackUrl = () => {
    let curUrl = this.props.match.path.split('/');
    curUrl.pop();
    curUrl.shift();

    function getUrl() {
      if (!routes['/' + curUrl.join('/')]) {
        curUrl.pop();
        getUrl();
      }
    }
    getUrl();

    return '/' + curUrl.join('/');
  };

  render() {
    const { html } = this.state;
    const { docs } = this.props;

    return (
      <div className="articleLayout" id="articleLayout">
        <Sidebar docs={docs} />
        <div className="articleContent" dangerouslySetInnerHTML={{ __html: html }} />
        <Nav html={html} />

        <div className="toolBar">
          <Link to="/">首页</Link>
          <Link to={this.goBackUrl()}>返回</Link>
          {/* <BackTop
            className="backTop"
            visibilityHeight={0}
            target={() => document.getElementById('articleLayout')}
          >
            返回顶部
          </BackTop> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Article);
