import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
type TeamProps = {
  _id: string;
  teamname: string;
  firstplayername: string;
  secondplayername: string;
  deleteCard: (_id: string) => void;
};
const Team: React.FC<TeamProps> = ({
  _id,
  teamname,
  firstplayername,
  secondplayername,
  deleteCard,
}) => {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {teamname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {firstplayername}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {secondplayername}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteCard(_id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Team;
