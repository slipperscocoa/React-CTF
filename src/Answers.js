import React from 'react'
import './Answers.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class AnswersApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFlag: '',
      userAnswer: ''
    }
  }

  handleFlagChange = event => {
    this.setState({ selectedFlag: event.target.value })
  }

  handleAnswerChange = event => {
    this.setState({ userAnswer: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { selectedFlag, userAnswer } = this.state
    if (
      selectedFlag === 'flag1' &&
      userAnswer.toLowerCase() === 'crime does not pay abe slaney'
    ) {
      alert('Correct answer for Flag 1!')
    } else if (
      selectedFlag === 'flag2' &&
      userAnswer.toLowerCase() === 'irene adler'
    ) {
      alert('Correct answer for Flag 2!')
    } else if (
      selectedFlag === 'flag3' &&
      userAnswer.toLowerCase() === 'oh to be a red head'
    ) {
      alert('Correct answer for Flag 3!')
    } else if (
      selectedFlag === 'flag4' &&
      userAnswer.toLowerCase() === 'norbury'
    ) {
      alert('Correct answer for Flag 4!')
    } else if (
      selectedFlag === 'flag5' &&
      userAnswer.toLowerCase() === 'pinkerton'
    ) {
      alert('Correct answer for Flag 5!')
    } else if (
      selectedFlag === 'flag6' &&
      userAnswer.toLowerCase() === 'TheSp3ckledB4nd'
    ) {
      alert('Correct answer for Flag 6!')
    } else {
      alert('Incorrect answer. Please try again.')
    }

    // Clear the form inputs
    this.setState({ selectedFlag: '', userAnswer: '' })
  }
  render () {
    const { selectedFlag, userAnswer } = this.state
    return (
      <div className='Answers'>
        <Container fluid>
          <br />
          <br />
          <Row>
            <Col style={{ textAlign: 'center' }}>
              <Link to='/' className='links'>
                <i>Home</i>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container
          fluid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            border: 'black',
          }}
        >
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Choose a Flag:</Form.Label>
                  <Form.Check
                    type='radio'
                    label='Flag 1'
                    name='flag'
                    value='flag1'
                    checked={selectedFlag === 'flag1'}
                    onChange={this.handleFlagChange}
                  />
                  <Form.Check
                    type='radio'
                    label='Flag 2'
                    name='flag'
                    value='flag2'
                    checked={selectedFlag === 'flag2'}
                    onChange={this.handleFlagChange}
                  />
                  <Form.Check
                    type='radio'
                    label='Flag 3'
                    name='flag'
                    value='flag3'
                    checked={selectedFlag === 'flag3'}
                    onChange={this.handleFlagChange}
                  />
                  <Form.Check
                    type='radio'
                    label='Flag 4'
                    name='flag'
                    value='flag4'
                    checked={selectedFlag === 'flag4'}
                    onChange={this.handleFlagChange}
                  />
                  <Form.Check
                    type='radio'
                    label='Flag 5'
                    name='flag'
                    value='flag5'
                    checked={selectedFlag === 'flag5'}
                    onChange={this.handleFlagChange}
                  />
                  <Form.Check
                    type='radio'
                    label='Flag 6'
                    name='flag'
                    value='flag6'
                    checked={selectedFlag === 'flag6'}
                    onChange={this.handleFlagChange}
                  />
                </Form.Group>
                <br/>
                <Form.Group>
                  <Form.Label>Type your answer:</Form.Label>
                  <Form.Control
                    type='text'
                    value={userAnswer}
                    onChange={this.handleAnswerChange}
                  />
                </Form.Group>
                <br/>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AnswersApp
