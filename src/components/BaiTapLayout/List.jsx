import React, { Component } from 'react'
import Items from './Items'

export default class List extends Component {
  render() {
    return (
     <section className="pt-4">
  <div className="container px-lg-5">
    {/* Page Features*/}
    <div className="row gx-lg-5">
      <div className="col-lg-6 col-xxl-4 mb-5">
       <Items/>
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Items/>
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Items/>
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Items/>
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Items/>
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Items/>
      </div>
    </div>
  </div>
</section>

    )
  }
}
