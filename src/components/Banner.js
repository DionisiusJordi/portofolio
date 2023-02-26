import { useState, useEffect } from "react";
import { Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/werewolf.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Streamer", "Gamer", "Freelance"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">

                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                        <div className={isVisible ? "animate_animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Personal Website</span>
                            <h1>{'Hi im Dionisius Jordi'}<span className="wrap"><br />{text}</span></h1>
                            <p>Hello Everyone and welcome. I made this website so people may get to know me. I'm also a diligent and honest person. I also like to help people or my friends who are experiencing difficulties.</p>
                            <button onClick={() => console.log('contact')}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>

                    <Col xs={11} md={5} xl={4}>
                        <img src={headerImg} alt="Headder Img" /> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}