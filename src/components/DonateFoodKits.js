import { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
// import './Donation.css';
import { getDatabase, ref, push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import './DonateFoodKits.css';

const DonateFoodKits = () => {
    const [numberOfKits, setNumberOfKits] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [donationSuccess, setDonationSuccess] = useState(false);
    const [donationError, setDonationError] = useState(null);
    const [donationData, setDonationData] = useState([]);

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
    const donationsRef = ref(database, 'food-kit-donations');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newDonation = {
                numberOfKits,
                name,
                email,
                phone,
                location,
                timestamp: new Date().toISOString(),
            };
            await push(donationsRef, newDonation);
            setDonationSuccess(true);
            alert("Thank you for your donation!")
            setNumberOfKits('');
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
                const dataArray = Object.entries(data).map(([key, value]) => {
                    return { key, ...value };
                });
                setDonationData(dataArray);
            } else {
                setDonationData([]);
            }
        });
    }, []);
    return (
        <div className="donation-container" id='initiative/3.4'>
            <h1>Donate Food Kits</h1>
            <p>Your donation will help provide food kits to those in need. Thank you for your generosity!</p>
            <p>We will connect with the closest donation center/ NGO and you can donate there or on request our nearest delivery partner will pick up from your home. Send the mail if you want to send it through shipping</p>
            {donationSuccess && <p className="success-message">Thank you for your donation!</p>}
            {donationError && <p className="error-message">{donationError}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="numberOfKits">
                    <Form.Label>Number of Kits</Form.Label>
                    <Form.Control type="number" placeholder="Enter number of kits to donate" value={numberOfKits} onChange={(e) => setNumberOfKits(e.target.value)} required />
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
            <h1>Food Kits donations made so far..</h1>
            <Table striped bordered hover className="donation-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Number of Kits</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Location</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
  {donationData.map((donation, index) => (
    <tr key={donation.id} id='display'>
      <td style={{ color: 'white' }}>{index + 1}</td>
      <td style={{ color: 'white' }}>{donation.numberOfKits}</td>
      <td style={{ color: 'white' }}>{donation.name}</td>
      <td style={{ color: 'white' }}>{donation.email}</td>
      <td style={{ color: 'white' }}>{donation.phone}</td>
      <td style={{ color: 'white' }}>{donation.location}</td>
      <td style={{ color: 'white' }}>{donation.timestamp}</td>
    </tr>
  ))}
</tbody>
    </Table>
        </div>
    );
};
export default DonateFoodKits;

