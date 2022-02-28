import React from "react";
import { Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowForwardIos } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  result: {
    cursor: "pointer",
    position: "relative",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    marginBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& $typo, mark": {
        color: theme.palette.secondary.main + "!important"
      },
      "& $arrowIcon": {
        display: "initial"
      }
    }
  },
  arrowIcon: {
    display: "none",
    position: "absolute",
    right: 0,
    top: "30%",
    marginRight: theme.spacing(1),
    color: theme.palette.secondary.main
  },
  typo: {
    fontWeight: theme.typography.fontWeightMedium,
    marginLeft: theme.spacing(1)
  }
}));

const markText = (text, source) => {
  const result = source.replace(
    new RegExp(text, "gi"),
    (match) =>
      `<mark style="color: #d84d46; background-color: transparent">${match}</mark>`
  );
  return result;
};

export default function Result({ result, term = " ", onRedirect }) {
  const classes = useStyles();

  const createMarkup = (html) => ({ __html: html });
  const text = `${result.id}<br/>${result.name}`;

  return (
    <Card className={classes.result} component="div" onClick={onRedirect}>
      <ArrowForwardIos className={classes.arrowIcon} />
      <Typography
        className={classes.typo}
        variant="body1"
        component="p"
        dangerouslySetInnerHTML={createMarkup(markText(term, text))}
      />
    </Card>
  );
}
