import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import headerImage from '../assets/img/banner.png';
import { motion } from 'framer-motion';
import {Nav} from 'react-bootstrap';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Volunteers", "Donors", "Campaigners"];
  const period = 2000;
  const variants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to Food4All!</span>
                  <h1>{`Hi! We are `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Volunteers", "Donors", "Campaigners" ]'><span className="wrap">{text}</span></span></h1>
                  <p> We are a non-profit organization dedicated to connecting volunteers, non-profits and foodbanks to help end food insecurity. Our platform makes it easy for anyone to get involved and make a difference in their community. With our reward system, you can earn points for your volunteer work and food donations, which can be used for tax concessions. Join us today and help us make a positive impact on the world, one meal at a time.</p>
                  <Nav.Link href="#initiatives">
                    <motion.button
                      className="join-button"
                      whileHover="hover"
                      whileTap="tap"
                      variants={variants}
                    >
                      Join Us! <ArrowRightCircle size={25} />
                    </motion.button>
                  </Nav.Link>

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImage} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}