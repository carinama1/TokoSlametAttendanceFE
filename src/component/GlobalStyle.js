import { createStyles, makeStyles } from "@material-ui/core";
import colors from "../theme/colors";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        backgroundColor: "#f4f6f8",
        height: "100%",
        width: "100%",
      },
      a: {
        textDecoration: "none",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
      ".icon": {
        "&--medium": {
          width: 32,
          height: 32,
        },
        "&--large": {
          width: 48,
          height: 48,
        },
      },
      ".profile": {
        "&--medium": {
          width: 52,
          height: 52,
        },
        "& img": {
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "center",
          border: `2px solid ${colors.bgSoft}`,
        },
      },
      img: {
        width: "100%",
        height: "100%",
      },
      ".name": {
        color: colors.primary,
        fontWeight: "bold",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
