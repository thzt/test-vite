import React from 'react'
import {Row,Col} from 'antd'

import classes from './App.module.less'

function App() {
  return (
    <div className={classes.app}>
      <Row>
        <Col span="24">24</Col>
      </Row>
      <Row>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
      <Row>
        <Col span="8">8</Col>
        <Col span="8">8</Col>
        <Col span="8">8</Col>
      </Row>
      <Row>
        <Col span="6">6</Col>
        <Col span="6">6</Col>
        <Col span="6">6</Col>
        <Col span="6">6</Col>
      </Row>
    </div>
  )
}

export default App
