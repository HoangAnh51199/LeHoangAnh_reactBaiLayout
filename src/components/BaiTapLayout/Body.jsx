import React, { Component } from 'react'
import Banner from './Banner'
import Items from './Items'

export default class Body extends Component {
  render() {
    return (
      <div>
 
  {/* Header*/}
 <Banner/>
  {/* Page Content*/}
  <section className="pt-4">
    <div className="container px-lg-5">
      {/* Page Features*/}
      <div className="row gx-lg-5">
        <div className="col-lg-3 col-xxl-4 mb-5">
         <Items/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Items/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Items/>
        </div>
        <div className="col-lg-3 col-xxl-4 mb-5">
        <Items/>
        </div>
       
      </div>
    </div>
  </section>
</div>

    )
  }
}
