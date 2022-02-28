import React from "react";
import clsx from "clsx";
import { MEASURE } from "../../../_constants";
// Mui
import {
  Popover,
  Typography,
  List,
  ListItem,
  Paper,
  IconButton
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Check, FiberManualRecord } from "@mui/icons-material";
import { Box } from "@mui/system";

const getFakeNotifations = (range) => {
  var data = [];
  for (let i = 0; i <= range; i++)
    data.push({
      read: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    });
  return data;
};

const fakeNotifications = getFakeNotifations(10);

const useStyles = makeStyles((theme) => ({
  popover: {
    marginLeft: theme.spacing(2)
  },
  content: {
    width: MEASURE.WIDTH_320,
    boxShadow: "none"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: `${theme.spacing(1)} ${theme.spacing(2)}`
  },
  list: {
    width: "100%",
    maxHeight: MEASURE.WIDTH_480,
    overflowY: "scroll"
  },
  listItem_read: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  listItem_unread: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: theme.palette.secondary.main
  },
  icon_read: {
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.dark
  },
  icon_unread: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main
  }
}));
export default function Notification(props) {
  const classes = useStyles();

  return (
    <Popover
      {...props}
      className={classes.popover}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
      <Paper className={classes.content}>
        <Box className={classes.title}>
          <Typography
            // sx={{ padding: (theme) => theme.spacing(2) }}
            variant="h5"
          >
            Notification
          </Typography>
          <IconButton children={<Check />} />
        </Box>
        <List className={classes.list} disablePadding>
          {fakeNotifications.map((noti, i) => (
            <ListItem
              divider
              key={i}
              className={clsx({
                [classes.listItem_read]: noti.read,
                [classes.listItem_unread]: !noti.read
              })}
              style={{ cursor: "pointer" }}
            >
              <FiberManualRecord
                className={clsx({
                  [classes.icon_read]: noti.read,
                  [classes.icon_unread]: !noti.read
                })}
                fontSize="small"
              />
              <Typography variant="body2" component="div">
                {noti.content}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Popover>
  );
}
