import './index.less';
import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';

class Main extends Component {
  state = {
    backUrl: ''
  };

  componentDidMount() {
    this.getBackUrl();
  }

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
    const { backUrl } = this.state;

    return (
      <div className="backLink">
        <Link to="/">首页</Link>
        {backUrl && backUrl !== '/' && <Link to={backUrl}>返回</Link>}
      </div>
    );
  }
}

export default withRouter(Main);
