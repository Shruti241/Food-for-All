import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { InitiativesCard } from "./InitiativesCard.js";
import projImg1 from "../assets/img/Initiatives/3.png";
import projImg2 from "../assets/img/Initiatives/4.png";
import projImg3 from "../assets/img/Initiatives/5.png";
import projImg4 from "../assets/img/Initiatives/6.png";
import projImg5 from "../assets/img/Initiatives/7.png";
import projImg6 from "../assets/img/Initiatives/8.png";
import projImg7 from "../assets/img/Initiatives/9.png";
import projImg8 from "../assets/img/Initiatives/10.png";
import projImg9 from "../assets/img/Initiatives/11.png";
import 'animate.css';
import { ArrowRightCircle } from 'react-bootstrap-icons';


import TrackVisibility from 'react-on-screen';
import './Initiatives.css';

export const Initiatives = () => {
  const projects = [
    {
      title: "Volunteer a food drive",
      description: "You can find a comprehensive selection of food drives in your area by browsing through our curated list. Whether you're looking to donate or receive assistance, we've got you covered with a variety of options. Take a moment to explore the various food drives and choose the one that's most convenient for you. Additionally, you can find information on the dates, times, and locations of each food drive to help you plan accordingly.",
      imgUrl: projImg1,
    },
    {
      title: "Organize Food Drive",
      description: "Consider organizing a food drive in your local community to help those in need. You can volunteer to lead and coordinate the necessary activities, either by partnering with a local NGO or by creating your own initiative and involving local volunteers. This could involve collecting donations, sorting and packing food items, and distributing them to those who are most in need. By taking action in your community, you can make a positive impact and provide essential support to those who are struggling with food insecurity.",
      imgUrl: projImg2,
    },
    {
      title: "Donate Funds",
      description: "You can make a positive impact on the lives of those in need by donating funds through our website. Our reliable donation process guarantees that your contribution will reach the intended recipients. To donate, simply follow the link provided on our website. You have the option to either donate directly to our organization's account or donate to a curated list of trusted NGOs that we work with. By donating, you can help provide essential resources and support to those who need it most.",
      imgUrl: projImg3,
    },
    {
      title: "Donate Food",
      description: "Consider donating food to individuals and families who are in need. You have the option to select a specific organization that you want to donate to, or simply send the donation to our address, and we will distribute it to those in need. You can donate grains, cereals, or any non-perishable items that can be stored for at least 2-3 days. You can create a request for food donation, and our delivery partner will reach out to you to arrange for the consignment pickup. Your donation can make a huge impact on someone's life and help alleviate food insecurity in your community.",
      imgUrl: projImg4,
    },
    {
      title: "Organize a local community of volunteers",
      description: "We invite you to take the initiative of creating a local community of volunteers who can help with various tasks related to food distribution and packing. By bringing people together, you can make a significant impact on the lives of those in need. As a token of appreciation, we will provide some swag items and t-shirts for your community members to wear while volunteering. Let's work together to make a positive difference in our local community!",
      imgUrl: projImg5,
    },
    {
      title: "Redeem Tax Concessions",
      description: "By volunteering or making donations to our cause, you can not only make a positive impact in your community, but also redeem tax concessions and earn valuable points towards rewards. We appreciate and recognize the efforts of our active contributors by sending them exclusive swag items as a token of gratitude. Additionally, we provide a transcript of your contributions that you can easily attach to your tax filings for added convenience and transparency. Join us today and make a difference while enjoying the benefits of being a part of our community.",
      imgUrl: projImg6,
    },
    {
      title: "Virtual Communities",
      description: "One way to make a positive impact is by forming virtual communities, which provide a safe space for people to connect and share ideas. In these communities, you can organize weekly events and activities aimed at raising awareness about local issues, such as food insecurity. For example, you could plan virtual food drives or competitions to help engage and educate others. By coming together in these virtual spaces, we can make a difference and create positive change in our communities.      ",
      imgUrl: projImg7,
    },
    {
      title: "Get Real time updates",
      description: "Stay updated with the latest information on local food drives and campaigns by subscribing to our service. Receive real-time updates and notifications about ongoing initiatives in your area, and choose to participate in those that align with your availability and interests. Join us in the fight against hunger and make a difference in your community today.      ",
      imgUrl: projImg8,
    },
    {
      title: "Corporate Partnerships",
      description: "If you represent a company that shares our vision of reducing food waste and fighting hunger, we welcome your contribution to Food4All. Please take a moment to submit a request and let us know how you would like to assist us in achieving our goals. Whether you would like to donate funds, organize a food drive, or volunteer your time and expertise, we are grateful for your support and eager to collaborate with you. Together, we can make a meaningful impact on the lives of those in need and build a more sustainable future.      ",
      imgUrl: projImg9,
    },
    
  ];

  return (
    <section className="initiatives" id="initiatives">
      <Container>
        <Row>
          <Col md={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Initiatives</h2>
                  <p>
                    Food4All is the diverse community of like-minded individuals that volunteer, donate and organize campaigns. We have various initiatives for removing the food insecurity among the individuals of the society. Here are some of the many initiative we have. More initiavates coming soon...
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <InitiativesCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        <button type="submit"><a href="https://tridentfood4all.netlify.app/">Get Involved<ArrowRightCircle size={25}/></a></button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        More Initiatives Coming soon....
                        </p>
                        <p>Interesting in hosting/ managing the new initiative?</p>
                        <button>Suggest New Initiative</button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        More Initiatives Coming soon....
                        </p>
                        <p>Interesting in hosting/ managing the new initiative?</p>
                        <button>Suggest New Initiative</button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}