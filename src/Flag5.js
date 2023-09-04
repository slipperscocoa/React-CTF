import React from 'react'
import './Flag5.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

class FlagFiveApp extends React.Component {
  render () {
    return (
      <div className="background">
        <Container fluid>
          <br />
          <br />
          <Row>
            <Col lg={4} className="d-flex justify-content-end">
                <Image src={require('./Images/scowrers.png')} rounded />
            </Col>
            <Col lg={2} style={{textAlign:'right',}}>
              <Link to='/' className='links'>
                <br/><br/>
                <i>Home</i>
              </Link>
            </Col>
            <Col lg={2}>
              <Link to='/answers' className='links'>
                <br/><br/>
                <i>Check Answer</i>
              </Link>
            </Col>
            <Col lg={4}>
                <Image src={require('./Images/scowrers.png')}  rounded />
            </Col>
          </Row>
          <br />
          <br />
          <Row className="flag-Five-Style">
            <Col lg={1}><br/></Col>
            <Col lg={10}>
                <h2><i>"'I have ordered a carriage,' said Lestrade, as we sat over a cup of tea. 'I knew your energetic nature, and that you would not be happy until you had been on the scene of the crime.'"</i></h2>
                <h2><i>"Sherlock Holmes was transformed when he was hot upon such a scent as this. Men who had only know the quiet thinker and logician of Baker Street would have failed to recognize him. His face flushed and darkened. His brows were drawn into two hard, black lines, while his eyes shoe out from beneath them with a steely glitter."</i></h2><br />
                <h1>We can all aspire to Holmes' devotion and alacrity when working on a case. Holmes followed all leads at the expense of his wardrobe and appearance. His investigations took him across moors, through swamps, and along muddy roads, and he always noticed minute details, even if it meant stooping on his hands and knees. </h1><br />
                <h1>Start your search by following his example, and "crawl" for clues. </h1>
                <br/>
                <br/>
                <br/>
            </Col>
            <Col lg={1}><br/></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default FlagFiveApp
