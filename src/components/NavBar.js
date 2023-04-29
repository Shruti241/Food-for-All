import { Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from '../assets/img/food4all.svg'
import './NavBar.css';
import { FaHome, FaDonate, FaUserFriends } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'animate.css';
import './NavBar2.css';
import LoginButton from './LoginButton';
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        <img src={logo} alt='logo' width={70} />
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toogle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link href="#initiatives" className={activeLink === 'donate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('donate')}>
              <FaDonate />Initiatives
            </Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown" className="my-custom-dropdown" >
              <NavDropdown.Item href="#initiative/3.1">1. Volunteer a Drive</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.2">2. Organize Food Drive</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.3">3. Donate Funds</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.4">4. Donate a meal</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.5">5. Organize Local Community</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.6">6. Redeem Tax Concessions</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.7">7. Virtual Communities</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.8">8. Real Time Updates</NavDropdown.Item>
              <NavDropdown.Item href="#initiative/3.9">9. Corporate Partnerships</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#footer">
                Newsletter
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pastwork" className={activeLink === 'volunteer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('volunteer')}>
              <FaUserFriends />
              Glimpses
            </Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>
              <SiNpm /> 
              Contact
            </Nav.Link>

          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='mailto:vaishnavi.kale3011@gmail.com'><i className="fa-solid fa-paper-plane"></i></a>
              <a href='https://www.instagram.com'><i className="fa-brands fa-instagram"></i></a>
              <a href='https://www.facebook.com'><i className="fa-brands fa-facebook"></i></a>
              <a href='https://www.twitter.com'><i className="fa-brands fa-twitter"></i></a>
              <a href='https://www.linkedin.com'><i className="fa-brands fa-linkedin-in"></i></a>
              <a href='https://www.telegram.com'><i className="fa-brands fa-telegram"></i></a>
              <a href='https://www.discord.com'><i className="fa-brands fa-discord"></i></a>
              <a href='https://www.youtube.com'><i className="fa-brands fa-youtube"></i></a>
              <a href='https://www.slack.com'><i className="fa-brands fa-slack"></i></a>
              <a href='https://www.github.com'><i className="fa-brands fa-github"></i></a>
              <a href="tel:123-456-7890"><i className="fa-solid fa-phone"></i></a>

            </div>
          </span>
          <LoginButton/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
