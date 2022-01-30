import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import Team from "./Team";
import TeamForm from "./TeamForm";
import "./Teams.css";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Teams() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  const [teams, setTeams] = useState([]);

  const handleDeleteCard = (id: string) => {
    const apiUrl = `http://localhost:8001/teams/${id}`;
    axios
      .delete(apiUrl, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then((resp) => {
        console.log(id);
      });
  };

  useEffect(() => {
    const apiUrl = "http://localhost:8001/teams";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      console.log(allPersons);

      setTeams(allPersons);
    });
  }, [isOpenModal]);

  return (
    <div>
      <Button onClick={handleOpenModal}>Add new Team</Button>
      <Grid
        className="cards"
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {teams.length == 0 ? (
          <Typography textAlign="center">NO teams</Typography>
        ) : (
          teams.map((team: any) => (
            <Team key={team._id} {...team} deleteCard={handleDeleteCard} />
          ))
        )}
      </Grid>
      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TeamForm closeModal={handleCloseModal} />
        </Box>
      </Modal>
    </div>
  );
}

export default Teams;
