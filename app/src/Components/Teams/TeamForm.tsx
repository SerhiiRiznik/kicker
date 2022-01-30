import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { Field, Form } from "react-final-form";

type TeamFormProps = {
  closeModal: () => void;
};

const TeamForm: React.FC<TeamFormProps> = ({ closeModal }) => {
  const onSubmit = (data: any) => {
    const apiUrl = "http://localhost:8001/teams";
    axios
      .post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resp) => {
        const allPersons = resp.data;
        console.log(allPersons);
        closeModal();
      });
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        //   validate={validate}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="form__group"
            autoComplete="off"
          >
            <h2>Created New Team</h2>
            <Grid container spacing={3}>
              <Grid item style={{ width: "100%", paddingLeft: "0" }}>
                <Field
                  className="input-item"
                  name="teamname"
                  id="teamname"
                  component="input"
                  placeholder="Team Name"
                />
                <label className="label">Team Name</label>
              </Grid>
              <Grid item style={{ width: "100%", paddingLeft: "0" }}>
                <Field
                  className="input-item"
                  name="firstplayername"
                  component="input"
                  placeholder="First Player Name"
                />
                <label className="label">First Player Name</label>
              </Grid>
              <Grid item style={{ width: "100%", paddingLeft: "0" }}>
                <Field
                  className="input-item"
                  name="secondplayername"
                  component="input"
                  placeholder="Second Player Name"
                />
                <label className="label">Second Player Name</label>
              </Grid>
              <Grid
                item
                style={{ width: "100%", paddingLeft: "0", textAlign: "center" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="inherit"
                  size="large"
                >
                  Created
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default TeamForm;
