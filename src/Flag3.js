import React from 'react';
import './Flag3.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';



class FlagThreeApp extends React.Component {
    render() {
        return (
            <div>
              <Container fluid className="FlagThree">
                <br/>
                <br/>
                <Row>
                    <Col style={{textAlign:'right',}}><Link to="/" className="links"><i>Home</i></Link></Col>
                    <Col><Link to="/answers" className="links"><i>Check Answer</i></Link></Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col className="left">
                      <Image className="image" src={require('./Images/Basil.jpg')} rounded />
                    </Col>
                    <Col className="right">
                      <h1>You scintillate today, Detective!</h1>
                      <br/>
                      <h2>It's not quite a Sarasate concert, but have a listen to the audio below. You might hear something interesting.</h2>
                      <br/>
                      <br/>
                      <br/>
                      <div>
                        <ReactAudioPlayer src={require('./Flag_Files/flag3.mp3')}  controls/>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <div>
                        <i>"Said Watson to Holmes, 'Is it wise--</i><br/>
                        <i>Such false whiskers when hunting for spies?'</i><br/>
                        <i>Said the sleuth, 'I'm afraid</i><br/>
                        <i>You're as dense as Lestrade;</i><br/>
                        <i>I'm disguised as myself in disguise!'"</i><br/>
                        <i>Double Bluff by Unknown</i>
                      </div>
                    </Col>
                </Row>
              </Container>
            </div>
        );
    }
}


export default FlagThreeApp;