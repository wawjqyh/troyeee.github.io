import './index.less';
import React, { Component } from 'react';
import Card from './components/card';

class Index extends Component {
  render() {
    return (
      <div className="index">
        <Card link="/jsApi" title="jsApi" desc="一些内置对象的用法" />
        <Card link="/others/git" title="其他" desc="零碎笔记等" />
        <Card link="/es6/intro" title="es6" desc="es6新增特性详解" />
        <Card link="/linuxBasics" title="linux" desc="linux基础知识" />
        <Card link="/linuxOrders" title="linux" desc="linux命令" />
        <Card link="/network" title="计算机网络" desc="网络基础" />
        <Card link="/sequelize" title="sequelize" desc="node orm 框架" />
        <Card link="/webpack" title="webpack" desc="webpack" />
      </div>
    );
  }
}

export default Index;
