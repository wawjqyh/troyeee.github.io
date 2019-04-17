import React, { Component } from 'react';
import Article from '@/components/article';
import docs from './config/docs.js';

class Main extends Component {
  render() {
    return <Article docs={docs} />;
  }
}

export default Main;
