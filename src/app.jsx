/*
 * @Author: xuhuihui
 * @Date: 2018-11-20 20:59:38
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-02 21:31:30
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

// 页面
import Home from 'page/home/index.jsx'
import Layout from 'component/layout/index.jsx'

console.log(Layout)

class App extends Component {
  //渲染
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Home} />
            <Route exact path="/product-category" component={Home} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
