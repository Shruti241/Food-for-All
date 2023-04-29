import { useState,useEffect  } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import './Volunteer.css';
import { getDatabase, ref, push,onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

export const Volunteer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
  });
  const [volunteers, setVolunteers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const firebaseConfig = {
    apiKey: "AIzaSyBcAR9bOUavF6LpUD1NixXMoAOV_R7sqzo",
    authDomain: "food4all-6aadf.firebaseapp.com",
    projectId: "food4all-6aadf",
    storageBucket: "food4all-6aadf.appspot.com",
    messagingSenderId: "618217078953",
    appId: "1:618217078953:web:90111331eb7d1a13c1a9b8",
    measurementId: "G-GPS1PNZD5W"
  };
  const app = initializeApp(firebaseConfig);
  const handleSubmit = (e) => {
    e.preventDefault();
    const database = getDatabase(app);
    const dataRef = ref(database, 'volunteers');
    push(dataRef, formData);
    alert("Volunteer registration successful!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      date: '',
    });

  };
  useEffect(() => {
    const database = getDatabase(app);
    const dataRef = ref(database, 'volunteers');
    onValue(dataRef, (snapshot) => {
      const volunteersData = snapshot.val();
      if (volunteersData) {
        const volunteersList = Object.keys(volunteersData).map((key) => ({
          id: key,
          ...volunteersData[key],
        }));
        setVolunteers(volunteersList);
      }
    });
  }, [app]);

  return (
    <div id='initiative/3.1'>
      <div id='init'>
        <div className="form-container">
          <h1>Volunteer</h1>
          <p>Volunteer for a drive</p>
          <p>Fill the form below to volunteer for a drive. Based on your convenience you will recieve a monthly newsletter specially curated based on your response. You can choose out of those drives and participate to receive points for volunteering</p>
          <div className="volunteer_form">
            <Form onSubmit={handleSubmit} className="my-form">
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" name="phone" value={formData.phone} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter your location(City/Town/Village): " name="location" value={formData.location} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="date">
                <Form.Label>Your availability Date</Form.Label>
                <Form.Control type="date" placeholder="Enter date" name="date" value={formData.date} onChange={handleChange} required />
              </Form.Group>

              <Button variant="" type="submit">
                Submit
              </Button>
              
            </Form>
            
          </div>
        </div>
      </div>
      <div className="table-container">
      <Table striped bordered hover responsive className="table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.phone}</td>
              <td>{volunteer.location}</td>
              <td>{volunteer.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  );
};

