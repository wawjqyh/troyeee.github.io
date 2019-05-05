import './index.less';
import React, { Component } from 'react';
import { getColor } from '@/utils/color';
import router from 'umi/router';

class Card extends Component {
  handleClickItem = (prefix, link) => {
    if (link === undefined || link === null) {
      return;
    }

    const url = prefix ? prefix + link : link;

    if (url.search(/http/) === -1) {
      router.push(url);
    } else {
      window.open(url);
    }
  };

  render() {
    const { title, desc, items, prefix } = this.props;

    return (
      <div className="catalogCard">
        <div className={`cardTitle ${getColor()}`}>{title}</div>
        {desc && <div className="cardDesc">{desc}</div>}

        <ul className="cardList">
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={`itemName ${
                  item.link !== null || item.link !== undefined ? 'linkItem' : ''
                }`}
                onClick={() => {
                  this.handleClickItem(prefix, item.link);
                }}
              >
                {item.name}
              </div>
              {item.desc && <div className="itemDesc">{item.desc}</div>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
