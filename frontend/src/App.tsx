import { useEffect, useRef, useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';

interface Car {
  id: number;
  license_plate_number: string;
  brand: string;
  model: string;
  daily_cost: number;
  created_at: Date;
  updated_at?: Date;
}

const API_BASE_URL = "http://localhost:3000/api"

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const [cars, setCars] = useState<Car[]>([])
  const [license_plate_number, setLicense_Plate_Number] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [daily_cost, setDaily_Cost] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadCars = () => {
    fetch(`${API_BASE_URL}/cars`)
      .then(response => response.json())
      .then(data => setCars(data))
  }

  useEffect(() => {
    loadCars();
  }, []);

  const scrollToForm = () => {
    if(formRef.current) {
      formRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const response = await fetch(`${API_BASE_URL}/cars`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        license_plate_number,
        brand,
        model,
        daily_cost: Number(daily_cost)
      })
    })

    if(response.ok) {
      setErrorMessage("");
      setSuccessMessage("Sikeres felvétel");
      setLicense_Plate_Number("");
      setBrand("");
      setModel("");
      setDaily_Cost("");
      loadCars();
    }
    else {
      setErrorMessage("hiba a felvetelnel");
      setSuccessMessage("");
    }
  }

  const handleKolcson = async (carsId: number) => {
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/cars/${carsId}/rent`, {
        method: "POST"
      })

      if(response.ok) {
        setErrorMessage("");
        setSuccessMessage("sikeres kolcsonzes")
      }
      else {
        setSuccessMessage("");
        setErrorMessage("hiba a kolcsonzesnel")
      }
    } catch (error) {
      setErrorMessage("hiba");
      setSuccessMessage("");
      console.error("hiba",error);
    }
  }

  return (
    <>
    <header>
        <Container>
        <Navbar.Brand href="#home">
          <h1>Petrik autokolcsonzo</h1>
        </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as="button" onClick={scrollToForm}>Uj auto felvetele</Nav.Link>
            <Nav.Link href="http://petrik.hu" target='_blank'>Petrik</Nav.Link>
          </Nav>
      </Container>
      </header>

      <main>
        <Container>
          {(successMessage || errorMessage) && (
            <Row className='mb-3'>
              <Col>
                {successMessage && (
                  <div className='alert-success alert' role='alert'>
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className='alert-danger alert' role='alert'>
                    {errorMessage}
                  </div>
                )}
              </Col>
            </Row>
          )}
          <Row>
            {cars.map((car) => (
              <Col key={car.id} className='mb-3' xs={12} md={6} lg={4}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${car.brand.toLowerCase()}_${car.model.toLowerCase()}.png`} />
                    <Card.Body>
                      <Card.Title><h3>{car.license_plate_number}</h3></Card.Title>
                      <Card.Text>
                        <p>Márka: {car.brand}</p>
                        <p>Modell: {car.model}</p>
                        <p>Napidíj: {car.daily_cost}</p>
                      </Card.Text>
                      <Button variant="primary" onClick={() => handleKolcson(car.id)}>Kölcsönzés</Button>
                    </Card.Body>
                  </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>

      <section>
        <Container ref={formRef}>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPlate">
            <Form.Label>Rendszám</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="rendszám"
            value={license_plate_number}
            onChange={(e) => setLicense_Plate_Number(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlate">
            <Form.Label>Márka</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="márka"
            value={brand}
            onChange={(e) => setBrand(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlate">
            <Form.Label>Modell</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="modell"
            value={model}
            onChange={(e) => setModel(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPlate">
            <Form.Label>napidij</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="napidij"
            value={daily_cost}
            onChange={(e) => setDaily_Cost(e.target.value)} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Új auto
          </Button>
        </Form>
        </Container>
      </section>

      <footer>
        <Container className='mb-3'>
            <p>nevem</p>
        </Container>
      </footer>
    </>
  )
}

export default App
