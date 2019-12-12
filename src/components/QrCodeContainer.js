import React, { Component } from 'react'

import QRCode from "qrcode.react"

export default class QrCodeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {value:""}
  }

  handleSubmit =(event)=>{
    event.preventDefault();

  }
  handleChange=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  render() {
    return (
      <div>
        <p>何もないでござる</p>
        <p>{this.state.value}</p>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
    { this.state.value !=="" && <QrCodeCanvas value={this.state.value}/>        }
      </div>
    )
  }
}



const QrCodeCanvas = (props)=>(
  <QRCode value={props.value} ></QRCode>
)


