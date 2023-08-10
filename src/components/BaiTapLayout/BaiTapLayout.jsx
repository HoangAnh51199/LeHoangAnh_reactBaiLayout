import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'

import Footer from './Footer'
import Body from './Body'

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}
