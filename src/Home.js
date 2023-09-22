import React from 'react'
import './App.css'
import DancingMen from './Images/dancing_men.jpg'
import Bohemia from './Images/bohemia.jpg'
import Sarasate from './Images/sarasate.jpg'
import Yellow from './Images/yellow_face.jpg'
import Valley from './Images/valley_of_fear.jpg'
import Speckled from './Images/speckled.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom'

class HomePageApp extends React.Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <Container fluid>
            <Row>
              <Col>
                <h1 id='title'>Welcome to 221B Baker Street!</h1>
              </Col>
            </Row>
          </Container>
        </header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col xs={3} lg={3}></Col>
            <Col xs={6} lg={6} style={{ borderTop: 'dashed' }}></Col>
            <Col xs={3} lg={3}></Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Container fluid>
          <Row>
            <Col>
              <h1>
                Get ready to sharpen your deductive reasoning and channel your
                inner Sherlock Holmes.
              </h1>
            </Col>
            <Col>
              <h1>
                Join me as we solve challenges inspired by the world's greatest
                detective.
              </h1>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container fluid>
            <Row>
              <Col xs={3} lg={3}></Col>
              <Col xs={6} lg={6} style={{ borderTop: 'dashed' }}></Col>
              <Col xs={3} lg={3}></Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <h2 id='padding'>
                From cryptic messages to modern vulnerabilities, each challenge
                will test your ability to think logically, creatively, and
                outside the box. So, grab your deerstalker cap (you can ditch
                the tobacco and cocaine), and get ready to solve some mysteries.
                When you think you've found the answer, check out the "Answers"
                page to verify. Good luck, detectives!
              </h2>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs={12} sm={12} md={12} lg={4} className='text-center'>
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img variant='top' src={DancingMen} />
                <Card.Body>
                  <Card.Title>Flag 1</Card.Title>
                  <Card.Text>
                    "What one man can invent another can discover," said Holmes.
                  </Card.Text>
                  <Link to='/flagOne'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={12} lg={4} className='text-center'>
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img variant='top' src={Bohemia} />
                <Card.Body>
                  <Card.Title>Flag 2</Card.Title>
                  <Card.Text>
                    "Never theorize before you have data. Invariably you end up
                    twisting facts to suit theories instead of theories to suit
                    facts."
                  </Card.Text>
                  <Link to='/flagTwo'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={12} lg={4} className='text-center'>
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img
                  style={{ marginLeft: '10px', width: '300px', height: '350px' }}
                  variant='top'
                  src={Sarasate}
                />
                <Card.Body>
                  <Card.Title>Flag 3</Card.Title>
                  <Card.Text>
                    “I observe that there is a good deal of German music on the
                    programme, which is rather more to my taste than Italian or
                    French. It is introspective, and I want to introspect.”
                  </Card.Text>
                  <Link to='/flagThree'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img variant='top' src={Yellow} />
                <Card.Body>
                  <Card.Title>Flag 4</Card.Title>
                  <Card.Text>
                    “Any truth is better than indefinite doubt.”
                  </Card.Text>
                  <Link to='/flagFour'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img variant='top' src={Valley} />
                <Card.Body>
                  <Card.Title>Flag 5</Card.Title>
                  <Card.Text>
                    “Mediocrity knows nothing higher than itself; but talent
                    instantly recognizes genius.”
                  </Card.Text>
                  <Link to='/flagFive'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} >
              <Card
                className='mx-auto'
                style={{
                  width: '20rem',
                  height: '36rem',
                  backgroundColor: '#f8f3ed'
                }}
              >
                <Card.Img variant='top' src={Speckled} />
                <Card.Body>
                  <Card.Title>Flag 6</Card.Title>
                  <Card.Text>
                    “I have heard, Mr. Holmes, that you can see deeply into the
                    manifold wickedness of the human heart. You may advise me
                    how to walk amid the dangers which encompass me.”
                  </Card.Text>
                  <Link to='/flagSix'>
                    <Button variant='primary'>Go to flag</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <h1>
              <i>
                "Il n’y a pas des sots si incommodes que ceux qui ont de
                l’esprit!”
              </i>
            </h1>
          </Row>
          <br />
          <br />
          <br />
        </Container>
      </div>
    )
  }
}

export default HomePageApp
