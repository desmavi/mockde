import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import Section from './components/Section';
import Content from "./components/Content";
import Img from "./components/Image";
import CardCustom from "./components/CardCustom";

import image1 from "./img/image1.png"
import image2 from "./img/image2.png"
import image3 from "./img/image3.png"
import image4 from "./img/image4.png"
import image5 from "./img/image5.png"
import image6 from "./img/image6.png"
import cardImg1 from "./img/card-img1.png"
import cardImg2 from "./img/card-img2.png"
import cardImg3 from "./img/card-img3.png"
import avatar from './img/avatar.png'
import heroImg from './img/hero.png'
import logo from './img/logo.png'
import logoLight from './img/logo-light.png'
import circle from './img/circle.png'

import ScrollAnimation from 'react-scroll-animation-wrapper';


function App() {
  return (
    <>
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="80"
          height="auto"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#home" className="navLink">About us</Nav.Link>
            <Nav.Link href="#link" className="navLink">Careers</Nav.Link>
            <Nav.Link href="#link" className="navLink">Services</Nav.Link>
            <Nav.Link href="#link" className="navLink">Blog</Nav.Link>
            <Nav.Link href="#link" className="navLink">Contact us</Nav.Link>
            <Button variant="custom btn-custom-secondary">Clone project</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ParallaxProvider>
      <Container style={{height: "100%"}}>
        <Section customHeight="calc(100vh - 83px" direct="row">
          <Content className="pt-3 pt-lg-0 mb-4 mb-lg-0">
            <h1 className="mb-3">We serve clients with ground breaking solutions</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
            <Button variant="custom btn-custom-primary">Work with us</Button>
          </Content>
          <Content className="mb-5 mb-lg-0">
            <div className="hero-img-container">
              <img className="img-fluid m-auto" src={heroImg} alt=""/>
              <Parallax className="circle" rotate={[0, 360]}>
              <img 
                src={circle} alt=""/>
              </Parallax>
            </div>
          </Content>
        </Section>

        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
          <Section customHeight="100vh" direct="row-reverse">
          <Content className="mb-3 mb-lg-0">
              <h2 className="mb-3">Business strategy</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
              <ul>
                <li>Cost strategy</li>
                <li>Differentiated product or service strategy</li>
                <li>Focus on a niche strategy</li>
              </ul>
            </Content>
            <Content className="mb-5 mb-lg-0" >
              <Img img={image1} customClass="img-container">
              <Parallax className="decor left" speed={5}>
                <div className="square"></div>
              </Parallax>
              </Img>
            </Content>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
          <Section customHeight="100vh" direct="row">
          <Content className="mb-3 mb-lg-0">
              <h2 className="mb-3">Digitalization</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis.</p> 
            </Content>
            <Content className="mb-5 mb-lg-0">
              <Img img={image2} customClass="img-container">
              <Parallax className="decor right" speed={5}>
                <div className="square"></div>
              </Parallax>
              </Img>
            </Content>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
          <Section customHeight="100vh" direct="row-reverse">
          <Content className="mb-3 mb-lg-0">
              <h2 className="mb-3">Risk assessment</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
              <ul>
                <li>Individual risk assessment</li>
                <li>Systems risk assessment</li>
                <li>Mathematical conceptualization</li>
              </ul>
            </Content>
            <Content className="mb-5 mb-lg-0">
              <Img img={image3} customClass="img-container">
              <Parallax className="decor left" speed={5}>
                <div className="square"></div>
              </Parallax>
              </Img>
            </Content>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
          <Section customHeight="100vh" direct="row">
          <Content className="mb-3 mb-lg-0"> 
              <h2 className="mb-3">Artificial intelligence</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis.</p>
            </Content>
            <Content className="mb-5 mb-lg-0">
              <Img img={image4} customClass="img-container">
              <Parallax className="decor right" speed={5}>
                <div className="square"></div>
              </Parallax>
              </Img>
            </Content>
          </Section>
        </ScrollAnimation>


        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
          <Section customHeight="100vh" direct="row-reverse">
          <Content className="mb-3 mb-lg-0">
              <h2 className="mb-3">Smart Contract</h2>
              <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.met, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
              <ul>
                <li>Smart contract implementation</li>
                <li>Smart legal contracts</li>
                <li>Basic contract law</li>
              </ul>
            </Content>
            <Content className="mb-5 mb-lg-0">
              <Img img={image5} customClass="img-container">
              <Parallax className="decor left" speed={5}>
                <div className="square"></div>
              </Parallax>
              </Img>
            </Content>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="animate__fadeInLeftBig" animateOnce>
        <Section customHeight="100vh" direct="row">
        <Content className="mb-3 mb-lg-0">
            <h2 className="mb-3">Finsweet was a dream to work with</h2>
            <p className="mb-4">Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
            <Stack direction="horizontal" gap={3}>
              <Image src={avatar} roundedCircle style={{width: "60px", height:"auto"}}/>
              <Stack style={{justifyContent:"center"}}>
                <p className="user-name">Chikelu Neo</p>
                <p className="user-role">CEO at MazeAI</p>
              </Stack>
            </Stack>
          </Content>
          <Content >
            <Img img={image6} customClass="img-container">
            </Img>
          </Content>
        </Section>
      </ScrollAnimation>
      </Container>
    </ParallaxProvider>

    <Container fluid style={{background:"#DCEAF5", padding:0, margin:0}}>
      <Container>
        <Row className="py-5" >
            <Col md={10} lg={11} className="mx-auto">
              <h2 className="mb-3">Latest Blog & News</h2>
              <div className="d-flex align-items-center flex-column flex-lg-row gy-3 justify-content-md-between mt-5">
                <CardCustom img={cardImg1} title="Why you have to digitalize in 2021"/> 
                <CardCustom img={cardImg2} title="Our internal process and longerm vision"/> 
                <CardCustom img={cardImg3} title="Helping the next generation of leaders"/> 
              </div>
              </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid style={{background:"#063255", padding:0, margin:0}} className="footer-container">
      <Container>
        <Row className="py-5 footer" style={{color: "white"}}>
        <Col md={10} lg={11} className="mx-auto d-flex flex-column flex-lg-row">

            <Col md={10} lg={3} className="mb-3">
              <img
                alt=""
                src={logoLight}
                width="80"
                height="auto"
                className="mb-3"
              />
              <h5>Bespoke software solutions</h5>
            </Col>

            <Col lg={3} className="mb-3">
              <h5>Company</h5>
              <p>About Us</p>    
              <p>Careers</p>   
              <p>Services</p> 
              <p>Blog</p>
            </Col>

            <Col lg={3} className="mb-3">
              <h5>Connect</h5>
              <p>hi@finsweet.com</p>    
              <p>+(123) 456-7890</p>   
            </Col>

            <Col lg={3} className="mb-3">
              <h5>Join Newsletter</h5>
              <input className="my-3" type="text" placeholder="Type email here" />
              <Button variant="custom btn-custom-primary">Subscribe</Button>
            </Col>
        </Col>

        <Col md={10} lg={11} className="mx-auto d-flex flex-column flex-lg-row mt-4">
          <p>© All rights reserved – Finsweet</p>
          <p className="ms-0 ms-lg-auto me-3">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </Col>
        </Row>
      </Container>
    </Container>

    </>
  );
}

export default App;
