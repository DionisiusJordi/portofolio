import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/streaming.png";
import meter2 from "../assets/img/team.png";
import meter3 from "../assets/img/freelancer.png";
import meter4 from "../assets/img/montage.png";
import meter5 from "../assets/img/presentation.png";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                               My Skills
                            </h2>
                            <p>These are the skills that i have and some of my skills are also my hobbies.<br />Currently im still sharpening my skills and i also like to discover new things.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">

                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Streamer</h5>
                                </div>

                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Gamer</h5>
                                </div>

                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Freelance</h5>
                                </div>

                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>Video Editor</h5>
                                </div>

                                <div className="item">
                                    <img src={meter5} alt="Image" />
                                    <h5>Public Speaking</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}