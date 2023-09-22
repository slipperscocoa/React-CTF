import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class FlagSixApp extends React.Component {
  render () {
    return (
      <div>
        <Container fluid>
          <br/>
          <br/>
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col lg={1}>
              <br/>
            </Col>
            <Col lg={5}>
              <Image src={require('./Images/swamp-adder.jpg')} />
            </Col>
            <Col lg={5}>
              <h1>The flag is contained somewhere in the file below. Before you can uncover it, you need to debug the code. The picture on the right will give you a clue as to the language.</h1>
              <br/>
              <br/>
              <h2><a href={require("./Flag_Files/flag6.txt")} download="./Flag_Files/flag6.txt">Download File</a></h2>
            </Col>
            <Col lg={1}>
              <br/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FlagSixApp
