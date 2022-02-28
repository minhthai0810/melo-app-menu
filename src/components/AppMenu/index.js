import React, { useState } from "react";
// Mui
import {
  Box,
  Tabs,
  Tab as MuiTab,
  Badge,
  Divider as MuiDivider,
  Avatar
} from "@mui/material";
import { Search, Notifications } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
// Comps
import { SearchPopover, UserPopover, NotiPopover } from "./popovers";
import { ROUTES, MEASURE } from "../../_constants";
import MeloIcon from "../MeloIcon";

const useStyles = makeStyles((theme) => ({
  main: {
    width: MEASURE.WIDTH_64,
    backgroundColor: theme.palette.text.primary,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    borderRadius: theme.shape.borderRadius
  },
  box: {
    minWidth: MEASURE.WIDTH_64,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  userAvatar: {
    borderRadius: theme.shape.borderRadius
  },
  selectedPopover: {
    color: theme.palette.primary.main
  }
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  borderColor: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)
}));

const getInitialCSS = (theme) => ({
  maxWidth: MEASURE.WIDTH_64,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  transition: theme.transitions.create(["color"], {
    duration: theme.transitions.duration.complex
  }),
  "&:hover": {
    color: theme.palette.primary.main
  }
});

const Item = styled(Box)(({ theme }) => ({
  ...getInitialCSS(theme),
  display: "flex",
  justifyContent: "center",
  cursor: "pointer"
}));

const Tab = styled(MuiTab)(({ theme }) => ({
  ...getInitialCSS(theme),
  minWidth: MEASURE.WIDTH_64
}));

const POPOVERS = {
  USER: "USER_POPOVER",
  SEARCH: "SEARCH_POPOVER",
  NOTI: "NOTIFICATION_POPOVER"
};

export default function AppMenu({ pathname = "/dashboard" }) {
  const classes = useStyles();
  const [popover, setPopover] = useState(null);
  const [tab, setTab] = useState(pathname);

  const handleChangeTab = (event, newValue) => setTab(newValue);

  const handleOpenPopover = (e, type) => {
    setPopover([type, e.currentTarget]);
  };

  const handleClosePopover = () => setPopover(null);

  const isOpened = (type) => {
    if (!Boolean(popover)) return false;
    return popover[0] === type;
  };

  const isSelected = (type) => {
    if (!Boolean(popover)) return null;
    if (popover[0] === type) return classes.selectedPopover;
    return null;
  };

  const getAnchorEl = () => {
    if (!Boolean(popover)) return null;
    return popover[1];
  };

  const handleSearch = (term) => console.log("search term", term);

  return (
    <Box className={classes.main}>
      <Box>
        {/* Logo */}
        <Item children={<MeloIcon />} />
        <Divider variant="middle" />

        <Box className={classes.box}>
          {/* Search */}
          <SearchPopover
            open={isOpened(POPOVERS.SEARCH)}
            anchorEl={getAnchorEl()}
            onClose={handleClosePopover}
            onSearch={handleSearch}
          />
          <Item
            className={isSelected(POPOVERS.SEARCH)}
            onClick={(e) => handleOpenPopover(e, POPOVERS.SEARCH)}
            children={<Search />}
          />

          {/* Notification */}
          <NotiPopover
            open={isOpened(POPOVERS.NOTI)}
            anchorEl={getAnchorEl()}
            onClose={handleClosePopover}
          />
          <Item
            className={isSelected(POPOVERS.NOTI)}
            onClick={(e) => handleOpenPopover(e, POPOVERS.NOTI)}
          >
            <Badge
              color="primary"
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              overlap="circular"
              badgeContent={10}
              variant="dot"
            >
              <Notifications />
            </Badge>
          </Item>
        </Box>
        <Divider variant="middle" />

        {/* Links */}
        <Tabs
          className={classes.item}
          orientation="vertical"
          value={tab}
          onChange={handleChangeTab}
        >
          {Object.keys(ROUTES.APP).map((key) => {
            const route = ROUTES.APP[key];
            const path = route.path;
            return (
              <Tab key={key} value={path} icon={<route.icon />} to={path} />
            );
          })}
        </Tabs>
      </Box>

      {/* User */}
      <UserPopover
        open={isOpened(POPOVERS.USER)}
        anchorEl={getAnchorEl()}
        onClose={handleClosePopover}
      />
      <Item onClick={(e) => handleOpenPopover(e, POPOVERS.USER)}>
        <Avatar
          alt="user-avavtar"
          src=""
          className={classes.userAvatar}
          variant="square"
        />
      </Item>
    </Box>
  );
}
