import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Spinner, Alert } from "react-bootstrap";

function PersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setPersons(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center bg-success text-white p-3">
        User List
      </h2>

      {persons.map((person) => (
        <Card key={person.login.uuid} className="mb-3 bg-info">
          <Card.Body>
            <div className="d-flex align-items-center gap-4">
              <div className="text-center">
                <img
                  src={person.picture.large}
                  alt={person.name.first}
                  className="rounded-circle mb-2"
                />
                <br />
                <Button variant="primary" size="sm">
                  Details
                </Button>
              </div>

              <div>
                <p><strong>Username:</strong> {person.login.username}</p>
                <p><strong>Name:</strong> {person.name.first} {person.name.last}</p>
                <p><strong>Gender:</strong> {person.gender}</p>
                <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}</p>
                <p><strong>Email:</strong> {person.email}</p>
                <p><strong>Date of Birth:</strong> {person.dob.date.substring(0, 10)}</p>
                <p><strong>Registered:</strong> {person.registered.date.substring(0, 10)}</p>
                <p><strong>Phone:</strong> {person.phone}</p>
                <p><strong>Cell:</strong> {person.cell}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default PersonList;
