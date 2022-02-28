import React from "react";
// Mui
import { Popover, Avatar, Button, Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ExitToApp } from "@mui/icons-material";
import { MEASURE } from "../../../_constants";

const useStyles = makeStyles((theme) => ({
  popover: {
    marginLeft: theme.spacing(2)
  },
  content: {
    width: MEASURE.WIDTH_256,
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2)
  },
  textContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  avatar: {
    width: MEASURE.WIDTH_72,
    height: MEASURE.WIDTH_72
  }
}));

export default function UserMenu(props) {
  const classes = useStyles();
  const handleSignOut = () => props.onClose();

  return (
    <Popover
      {...props}
      className={classes.popover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
    >
      <Paper className={classes.content}>
        <Avatar alt="user-avavtar2" src="" classes={{ root: classes.avatar }} />
        <Box className={classes.textContainer}>
          <Typography variant="h5" align="center" children={"User Name"} />
          <Typography
            variant="body1"
            align="center"
            children={"user@gmail.com"}
          />
        </Box>
        <Button
          startIcon={<ExitToApp />}
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Paper>
    </Popover>
  );
}
