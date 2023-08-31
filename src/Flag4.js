import React from 'react'
import './Flag4.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class FlagFourApp extends React.Component {
  render () {
    return (
      <div>
        <Container fluid>
          <br />
          <br />
          <Row>
            <Col style={{ textAlign: 'right' }}>
              <Link to='/' className='links'>
                <i>Home</i>
              </Link>
            </Col>
            <Col>
              <Link to='/answers' className='links'>
                <i>Check Answer</i>
              </Link>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row className='content'>
            <Col><h1>Even the renowned Sherlock Holmes erred, although you will be relieved to know it happened only once. </h1></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FlagFourApp
