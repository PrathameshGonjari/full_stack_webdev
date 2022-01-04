import React from "react";
import { Link } from "react-router-dom";
import './index'

export default function AppMenu() {
  return (
    <div>
      <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/"
              ><h2>NEWS PRO</h2>
              </a>
            </div>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <Link class="page-scroll" to="/dashboard">HOME</Link>
                </li>
                <li>
                  <Link class="page-scroll" to="/headlines">HEADLINES</Link>
                </li>
                <li>
                  <Link class="page-scroll" to="/technology">TECHNOLOGY</Link>
                </li>
                <li>
                  <Link class="page-scroll" to="/business">BUSINESS</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}