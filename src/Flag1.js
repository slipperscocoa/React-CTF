import React from 'react';
import './Flag1.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'



class FlagOneApp extends React.Component {
    render() {
        return (
            <div className="FlagOne">
                <Container fluid>
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
                    <br/>
                    <br/>
                    <br/>
                    <Row className="explanation">
                        <Col><h1>Hopefully, you'll be able to break this cipher before it's too late.</h1></Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row className="explanation">
                        <Col><h1>The lives of Hilton and Elsie Cubitt depend upon it!</h1></Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row className="explanation">
                        <Col><h1>Fortunately, you have more tools at your disposal than Holmes did in 1903.</h1></Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Image src={require('./Flag_Files/flag1.png')} className="cipher" rounded /></Col>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <Col className="footer"><i>"'You see,' he explained, 'I consider that a man's brain originally is like a little empty attic, and you have to stock it with such furniture as you choose. A fool takes in all the lumber of every sort that he comes across, so that the knowledge which might be useful to him gets crowded out, or at best is jumbled up with a lot of other things, so that he has a difficulty in laying his hands on it. Now the skillful workman is very careful indeed as to what he takes into his brain-attic. He will have nothing but the tools which may help him in doing his work.'" --Sherlock Holmes in A Study in Scarlet</i></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default FlagOneApp;