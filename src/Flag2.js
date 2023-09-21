import React, { useState } from 'react'
import './Flag2.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel'

function ImageCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex)
  }

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item style={{ marginLeft: '25%' }}>
          <img
            className='d-block w-50 size'
            src={require('./Images/Sketch1.jpg')}
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item style={{ marginLeft: '25%' }}>
          <img
            className='d-block w-50 size'
            src={require('./Images/Sketch2.jpg')}
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item style={{ marginLeft: '25%' }}>
          <img
            className='d-block w-50 size'
            src={require('./Images/Sketch5.jpg')}
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item style={{ marginLeft: '25%' }}>
          <img
            className='d-block w-50 size'
            src={require('./Images/Sketch4.jpg')}
            alt='Fourth slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

class FlagTwoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }

  handleInputChange = event => {
    this.setState({ userInput: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { userInput } = this.state
    if (userInput === 'help') {
      alert(
        'Of course, here you go: "What do you get when you combine coffee with an actor\'s lines?"'
      )
    } else {
      alert('Sorry, it looks like we do not have your requested image')
    }
  }

  render () {
    const { userInput } = this.state
    return (
      <div>
        <Container fluid className='flagTwo'>
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
          <Row>
            <Col lg={4}></Col>
            <Col lg={4} style={{ textAlign: 'center' }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type='text'
                    value={userInput}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={4}></Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
              <h2>
                Sidney Edward Paget was an English illustrator known for his
                significant artistic contributions to the Sherlock Holmes
                stories. His detailed and evocative illustrations helped to
                visually define the characters and settings of Holmes and
                Watson.
              </h2>
              <br />
              <h2>
                Use the search bar to search for your favorite Sidney Paget
                sketches. If you need help finding what you're looking for,
                don't be afraid to ask!
              </h2>
            </Col>
            <Col lg={5}>
              <ImageCarousel />
            </Col>
            <Col lg={1}></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
        <script>
          var obfuscated = "dmFyIF8weDNlNzkyYj1fMHgzODc5OyhmdW5jdGlvbihfMHgzMzQ5MjAsXzB4MzAyMzkyKXt2YXIgXzB4MzQ3ZmU4PV8weDM4NzksXzB4NGY0MzM3PV8weDMzNDkyMCgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4Mjc4MjlkPXBhcnNlSW50KF8weDM0N2ZlOCgweDE5NykpLzB4MSstcGFyc2VJbnQoXzB4MzQ3ZmU4KDB4MWEwKSkvMHgyK3BhcnNlSW50KF8weDM0N2ZlOCgweDFhMSkpLzB4MyoocGFyc2VJbnQoXzB4MzQ3ZmU4KDB4MTllKSkvMHg0KSstcGFyc2VJbnQoXzB4MzQ3ZmU4KDB4MTljKSkvMHg1K3BhcnNlSW50KF8weDM0N2ZlOCgweDE5YikpLzB4NioocGFyc2VJbnQoXzB4MzQ3ZmU4KDB4MWE0KSkvMHg3KSstcGFyc2VJbnQoXzB4MzQ3ZmU4KDB4MWE1KSkvMHg4Ky1wYXJzZUludChfMHgzNDdmZTgoMHgxYTYpKS8weDkqKC1wYXJzZUludChfMHgzNDdmZTgoMHgxOWYpKS8weGEpO2lmKF8weDI3ODI5ZD09PV8weDMwMjM5MilicmVhaztlbHNlIF8weDRmNDMzN1sncHVzaCddKF8weDRmNDMzN1snc2hpZnQnXSgpKTt9Y2F0Y2goXzB4Mzk4MThjKXtfMHg0ZjQzMzdbJ3B1c2gnXShfMHg0ZjQzMzdbJ3NoaWZ0J10oKSk7fX19KF8weDI5NWIsMHhiMWY2YikpO3ZhciBfMHgxYTJjPVtfMHgzZTc5MmIoMHgxOTkpXTtmdW5jdGlvbiBfMHgyOTViKCl7dmFyIF8weDNhYzUyZT1bJzk0NDU5OEhZdHpoRycsJzQ3MTEzOTBwcE1OTUUnLCduZWFkJywnMzUyaHF5VVRtJywnNDQzNDBpYXFCaFonLCc2OTgyMjRRS3BUQVYnLCcxNzczZ0R3cnpCJywnbGVyJywncHVzaCcsJzdFalJ3VWcnLCcxMTE2Nzc5MlV2Y3N6UCcsJzYxOTJpYW5EcGwnLCcxNTYyNzB5cXdDVVAnLCdzaGlmdCcsJ2lyZW5lXHgyMGFkbGVyJywnMHgwJ107XzB4Mjk1Yj1mdW5jdGlvbigpe3JldHVybiBfMHgzYWM1MmU7fTtyZXR1cm4gXzB4Mjk1YigpO31mdW5jdGlvbiBfMHgzODc5KF8weDM3N2FlZixfMHg0YzVlNCl7dmFyIF8weDI5NWJkYT1fMHgyOTViKCk7cmV0dXJuIF8weDM4Nzk9ZnVuY3Rpb24oXzB4Mzg3OTM4LF8weDI3YzVmMSl7XzB4Mzg3OTM4PV8weDM4NzkzOC0weDE5Nzt2YXIgXzB4M2MwYTliPV8weDI5NWJkYVtfMHgzODc5MzhdO3JldHVybiBfMHgzYzBhOWI7fSxfMHgzODc5KF8weDM3N2FlZixfMHg0YzVlNCk7fShmdW5jdGlvbihfMHgxNWMxNmQsXzB4MTk5OThiKXt2YXIgXzB4NGZjN2JkPWZ1bmN0aW9uKF8weDE0YmFlMSl7dmFyIF8weDQ0NTcxND1fMHgzODc5O3doaWxlKC0tXzB4MTRiYWUxKXtfMHgxNWMxNmRbXzB4NDQ1NzE0KDB4MWEzKV0oXzB4MTVjMTZkW18weDQ0NTcxNCgweDE5OCldKCkpO319O18weDRmYzdiZCgrK18weDE5OTk4Yik7fShfMHgxYTJjLDB4MTU5KSk7dmFyIF8weDUzYTQ9ZnVuY3Rpb24oXzB4NTNjYzQyLF8weDkxNjRiMSl7XzB4NTNjYzQyPV8weDUzY2M0Mi0weDA7dmFyIF8weDE3OWU4ND1fMHgxYTJjW18weDUzY2M0Ml07cmV0dXJuIF8weDE3OWU4NDt9LHBhcnQxPSdpcmUnLHBhcnQyPV8weDNlNzkyYigweDE5ZCkscGFydDM9XzB4M2U3OTJiKDB4MWEyKSxzZWNyZXQ9cGFydDErcGFydDIrcGFydDM7ZnVuY3Rpb24gXzB4MWJjYTY0KF8weGM3YjFmNyxfMHg0MzQ1ZDUpe3JldHVybiBfMHhjN2IxZjc7fWNvbnNvbGVbXzB4NTNhNChfMHgzZTc5MmIoMHgxOWEpKV0oc2VjcmV0KTs="
        </script>
      </div>
    )
  }
}

export default FlagTwoApp
