import { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import './Donation.css';
import { getDatabase, ref, push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
const DonateFunds = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [donationError, setDonationError] = useState(null);
  const [totalDonations, setTotalDonations] = useState(0);
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
  const database = getDatabase(app);
  const donationsRef = ref(database, 'donations');
  const [donations, setDonations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDonation = {
        donationAmount,
        name,
        email,
        phone,
        location,
        timestamp: new Date().toISOString(),
      };
      await push(donationsRef, newDonation);
      setDonationSuccess(true);
      alert("Thank you for your donation!")
      setDonationAmount('');
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
    } catch (error) {
      setDonationError(error.message);
    }
  };
  useEffect(() => {
    onValue(donationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const donationsArray = Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
        setDonations(donationsArray);
        setTotalDonations(donationsArray.reduce((acc, curr) => acc + parseInt(curr.donationAmount), 0));
      } else {
        setDonations([]);
      }
    });
  }, []);

  return (
    <div className="donation-container" id='initiative/3.3'>
      <h1>Make a Donation</h1>
      <p>Your donation will help support our cause to provide food to those in need. Thank you for your generosity!</p>
      {donationSuccess && <p className="success-message">Thank you for your donation!</p>}
      {donationError && <p className="error-message">{donationError}</p>}
      <div className="total-donations">
      <p className="total-donations-text">Total Donations Raised till date:Rs. {donations.reduce((acc, curr) => acc + Number(curr.donationAmount), 0)}</p>
    </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="donationAmount">
          <Form.Label>Donation Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter donation amount" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Donate
        </Button>
      </Form>
      <h1>Donation List</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Donation Amount</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{donationAmount}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{location}</td>
          </tr>
          {donations.map((donation) => (
            <tr key={donation.id}>
              <td>{donation.donationAmount}</td>
              <td>{donation.name}</td>
              <td>{donation.email}</td>
              <td>{donation.phone}</td>
              <td>{donation.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DonateFunds;
