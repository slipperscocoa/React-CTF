import './App.css';
import DancingMen from './Images/dancing_men.jpg';
import Bohemia from './Images/bohemia.jpg';
import Sarasate from './Images/sarasate.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col><h1 id="title">Welcome to 221B Baker Street!</h1></Col>
          </Row>
        </Container>
      </header>
      <body>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p><b>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
        <br/>
        <br/>
        <br/>
        <br/>
        <Container fluid>
          <Row>
            <Col><h1>Get ready to sharpen your deductive reasoning and channel your inner Sherlock Holmes.</h1></Col>
            <Col><h1>Join me as we solve challenges inspired by the world's greatest detective.</h1></Col>
          </Row>
          <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <p><b>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
        <br/>
        <br/>
        <br/>
        <br/>
          <Row>
            <Col><h2 id="padding">From cryptic messages to modern vulnerabilities, each challenge will test your ability to think logically, creatively, and outside the box. So, grab your deerstalker cap (you can ditch the tobacco and cocaine), and get ready to solve some mysteries. When you think you've found the answer, checkout the "Answers" page to verify. Good luck, detectives!</h2></Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <br/>
          <Row >
            <Col className="text-center">
              <Card className="mx-auto" style={{ width: '20rem', height: '36rem' }}>
                <Card.Img variant="top" src={DancingMen} />
                <Card.Body>
                  <Card.Title>Flag 1</Card.Title>
                  <Card.Text>
                  "What one man can invent another can discover," said Holmes.
                  </Card.Text>
                  <Button variant="primary">Go to flag</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="text-center">
              <Card className="mx-auto" style={{ width: '20rem', height: '36rem' }}>
                <Card.Img variant="top" src={Bohemia} />
                <Card.Body>
                  <Card.Title>Flag 2</Card.Title>
                  <Card.Text>
                  "Never theorize before you have data. Invariably you end up twisting facts to suit theories instead of theories to suit facts."
                  </Card.Text>
                  <Button variant="primary">Go to flag</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className="text-center">
              <Card className="mx-auto" style={{ width: '20rem', height: '36rem' }}>
                <Card.Img style={{ width: '300px', height: '350px'}}variant="top" src={Sarasate} />
                <Card.Body>
                  <Card.Title>Flag 3</Card.Title>
                  <Card.Text>
                  “I observe that there is a good deal of German music on the programme, which is rather more to my taste than Italian or French. It is introspective, and I want to introspect.”
                  </Card.Text>
                  <Button variant="primary">Go to flag</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Container>
      </body>
    </div>
  );
}

export default App;
