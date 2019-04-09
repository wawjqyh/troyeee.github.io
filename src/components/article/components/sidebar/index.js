import './index.less';
import React, { Component } from 'react';
import NavLink from 'umi/navlink';
import withRouter from 'umi/withRouter';

class Sidebar extends Component {
  render() {
    const path = this.props.match.path.split(':')[0];
    const docs = this.props.docs;

    return (
      <div className="sidebar">
        <h2>目录</h2>
        <ul>
          {docs.map((item, index) => (
            <li key={index}>
              {typeof item === 'object' && (
                <React.Fragment>
                  {item[1] && <NavLink to={`${path}${item[1]}`}>{item[0]}</NavLink>}
                  {!item[1] && <div>{item[0]}</div>}
                </React.Fragment>
              )}
              {typeof item === 'string' && <div className="classification">{item}</div>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
