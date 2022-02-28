import React, { useState } from "react";
// Mui
import {
  InputBase,
  IconButton,
  Box,
  Typography,
  Popover,
  Paper
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";

// Components
import Result from "./Result";
import { MEASURE } from "../../../../_constants";
import { styled } from "@mui/system";

const createSearchResults = (range) => {
  let data = [];
  for (let i = 0; i < range; i++)
    data.push({ id: "0293874929293849", name: "Username" });
  return data;
};

const results = {
  orders: createSearchResults(3),
  products: createSearchResults(5)
};

const useStyles = makeStyles((theme) => ({
  popover: {
    marginLeft: theme.spacing(1)
  },
  content: {
    width: MEASURE.WIDTH_320,
    maxHeight: MEASURE.WIDTH_480,
    margin: theme.spacing(2),
    boxShadow: "none"
  },
  searchBar: {
    border: "1px solid rgb(239, 59, 54)",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1)
  },
  resultTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1)
  }
}));

// Search Dialog
const SearchInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  "& .MuiInputBase-input": {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightRegular
  }
}));

var delayTimer;

export default function SearchPopover({ open, anchorEl, onClose, onSearch }) {
  const classes = useStyles();
  const [term, setTerm] = useState("");

  const handleClose = () => onClose();

  const handleChangeTerm = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => onSearch(term), 1000);
  };

  const handleSubmit = (e) => e.preventDefault();

  const renderResults = () => {
    if (!Boolean(term)) return null;
    return Object.keys(results).map((type) => (
      <Box key={type}>
        <Typography
          className={classes.resultTitle}
          variant="body1"
          color="primary"
          children={type.toUpperCase()}
        />
        {results[type].map((result, index) => (
          <Result
            key={type + result.id + index}
            result={result}
            term={term}
            onRedirect={handleClose}
          />
        ))}
      </Box>
    ));
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      className={classes.popover}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      onClose={onClose}
    >
      <Paper className={classes.content}>
        <Box
          className={classes.searchBar}
          component="form"
          sx={{ display: "flex" }}
          onSubmit={handleSubmit}
        >
          <IconButton
            aria-label="search"
            size="large"
            disabled
            sx={{ paddingRight: 0 }}
            children={<Search color="primary" />}
          />
          <SearchInput
            placeholder="Search..."
            inputProps={{ "aria-label": "search data" }}
            value={term}
            onChange={handleChangeTerm}
          />
        </Box>
        <Box>{renderResults()}</Box>
      </Paper>
    </Popover>
  );
}
