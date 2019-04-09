import './index.less';
import React, { Component } from 'react';
import { getColor } from '@/utils/color';
import router from 'umi/router';

class Card extends Component {
  handleClickItem = link => {
    if (link) {
      router.push(link);
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
                className={`itemName ${item.link ? 'linkItem' : ''}`}
                onClick={() => {
                  this.handleClickItem(prefix + item.link);
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
