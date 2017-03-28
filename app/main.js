
'use strict';
// 库
// 移动布局库
import 'lib-flexible'
//React所需库
import React from 'react';
import { render } from 'react-dom';
//路由库
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

//提供异步action库
import thunk from 'redux-thunk';
//提供ajax访问服务器库
import axios from 'axios';
//状态管理Redux库
import { createStore, applyMiddleware,compose } from 'redux'
//开发Redux项目工具库
import DevTools from './DevTools'

import reducer from './redux/reducer'
import { Provider } from 'react-redux'

const enhancer = compose(
    DevTools.instrument()
);

// const store = createStore(reducer, enhancer, applyMiddleware(thunk))
const store = createStore(reducer, applyMiddleware(thunk))

window.axios = axios

// 组件与页面导入
import List from './view/list.jsx'
import Detail from './view/detail.jsx'
import listDefault from './components/list-default.jsx'
import ListTheme from './components/list-theme.jsx'
import Editor from './view/editor.jsx'
import Author from './view/author.jsx'
import Comments from './view/comments.jsx'
import Recommender from './view/recommender.jsx'
import Section from './view/section.jsx'

//导入主css文件。
import './css/main.scss';
//导入字体图标文件
import 'font-awesome/css/font-awesome.min.css'

render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={List}>
            <IndexRoute component={listDefault}/>
            <Route path="theme/:id" component={ListTheme} />
            <Route path="author" component={Author} />
            {/*<Route path="messages/:id" component={Message} />*/}
          </Route>
          {/*<Route path="theme" component={Hello}/>*/}
          <Route path="detail/:id" component={Detail} />
          <Route path="editor" component={Editor} />
          <Route path="comments/:id" component={Comments} />
          <Route path="section/:id" component={Section} />
          <Route path="recommender/:id" component={Recommender} />
        </Router>
        {/*<DevTools />*/}
      </div>
    </Provider>,
    document.getElementById('app')
);
