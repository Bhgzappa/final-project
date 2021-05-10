import { Form, Container, Button } from "react-bootstrap";
import {useState, useContext } from "react"
import { PatientsContext } from "../contexts/PatientsContext";

const AddPatient = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [doa, setDoa] = useState();
  const [dod, setDod] = useState();

  const { createPatient } = useContext(PatientsContext);

  const addPatient = (e) => {
    e.preventDefault();
    const newPatient = {
      name,
      age,
      address,
      diagnosis,
      doa,
      dod,
    };
    createPatient(newPatient);
  };
  return (
    <Container
      style={{
        height: "70vh",
        width: "70%",
        display: "grid",
        gridTemplateColumns: "40%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={addPatient}
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "1fr",
          gridGap: 15,
          padding: "20px",
          border: "1px solid white",
        }}
      >
        <h3 className="text-center">Patient Details Form</h3>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        ></Form.Control>
        <Form.Control
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Age"
        ></Form.Control>
        <Form.Control
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address "
        ></Form.Control>
        <Form.Control
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          placeholder="Enter Diagnosis "
        ></Form.Control>
        <Form.Control
          value={doa}
          onChange={(e) => setDoa(e.target.value)}
          placeholder="Enter date of admission "
        ></Form.Control>
        <Form.Control
          value={dod}
          onChange={(e) => setDod(e.target.value)}
          placeholder="Enter date of discharge "
        ></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
};

export default AddPatient;
