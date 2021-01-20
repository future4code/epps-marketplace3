import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import { LayoutHeader } from './LayoutHeader'


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <LayoutHeader />  
        
        <Footer/>
      </div>
    )
  }
}
