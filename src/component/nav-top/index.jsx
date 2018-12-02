import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavTop extends Component {
  onLogout(){

  }

  render() {
    return (
      <div className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="index.html">
            <b>Happy Mall</b>
          </Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw" />
              <span>欢迎，adminxxx</span>
              <i className="fa fa-caret-down" />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw" />
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
