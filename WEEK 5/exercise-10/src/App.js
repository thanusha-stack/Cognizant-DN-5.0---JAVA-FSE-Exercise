import './App.css';
import { Row,Col,Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Offices = [
  {
    id: 1,
    name: "Tech Hub",
    address: "MG Road, Bengaluru",
    rent: 45000,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
  },
  {
    id: 2,
    name: "Innovation Park",
    address: "T Nagar, Chennai",
    rent: 75000,
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500"
  },
  {
    id: 3,
    name: "Business Point",
    address: "Hitech City, Hyderabad",
    rent: 60000,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500"
  },
  {
    id: 4,
    name: "Sky Tower",
    address: "Baner, Pune",
    rent: 90000,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500"
  },
  {
    id: 5,
    name: "Corporate Plaza",
    address: "Salt Lake, Kolkata",
    rent: 55000,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500"
  }
];

  return (
    <div className="App">
      <h3 className="mb-5">Office Space, at Affordable Range</h3>
      <Row>
      {Offices.map((o)=>(
        <Col md={4} className="mb-4">
        <div key={o.id}>
          <Card>
            <Card.Title>{o.name}</Card.Title>
            <Card.Img
              variant="top"
              src={o.image}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Text className={o.rent>60000?"text-danger fw-bold":"text-success fw-bold"}>Rent: ${o.rent}</Card.Text>
            <Card.Text>Address: {o.address}</Card.Text>
          </Card>
        </div>
        </Col>
      ))}
      
    </Row>
    </div>
  );
}

export default App;
