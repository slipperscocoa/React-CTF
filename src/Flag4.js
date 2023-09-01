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
          <Row className='content'>
            <Col><br/></Col>
            <Col lg={5}><Image src={require('./Flag_Files/jeremy_brett.jpg')} style={{ width: '100%', height: '100%'}} rounded/></Col>
            <Col lg={5}>
                <h1>Even the renowned Sherlock Holmes erred, although you will be relieved to know it happened only once. </h1>
                <br/>
                <br/>
                <h1>He was a prideful man; thus, the details of his mistake are guarded carefully. Where did he acquire such ego? Perhaps it originated from his famous <b className="color-clue">French</b> relatives? In any case, his amour-propre wasn't exactly misplaced.</h1>
                <br/>
                <br/>
                <h1><a href={require("./Flag_Files/jeremy_brett.jpg")} download="flag4.jpg" className='link-color'>Download File</a></h1>
            </Col>
            <Col><br/></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FlagFourApp
