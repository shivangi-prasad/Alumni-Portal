import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import NavBar from '../navbar/navbar';
import Button from "@material-ui/core/Button";

export const Professional = ({ formData, setForm, navigation }) => {
  const { occupation, workingAt, position, achievements } = formData;

  return (
    <div>
      <NavBar/>
    <Container maxWidth="xs">
      <h3><em>Professional details</em></h3>
      <TextField
        label="Occupation"
        name="occupation"
        value={occupation}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Working at"
        name="workingAt"
        value={workingAt}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Position"
        name="position"
        value={position}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Achievements"
        name="achievements"
        value={achievements}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "2rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ float: "left", fontSize: 12 }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{ float: "right" , fontSize: 12}}
          color="primary"
          variant="contained"
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
    </div>
  );
};