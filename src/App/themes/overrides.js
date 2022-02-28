const ui_overrides = {
  typography: {
    fontFamily: [
      "'Quicksand', sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    htmlFontSize: 14,
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h5: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 500
    }
  },
  components: {
    MuiTableCell: {
      head: { fontWeight: 600 },
      stickyHeader: { backgroundColor: "none" }
    },
    MuiInputBase: {
      input: {
        fontWeight: 400,
        fontSize: "0.875rem"
      }
    },
    MuiContainer: {
      root: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiPaper: {
      root: {
        overflow: "hidden"
      }
    },
    MuiIconButton: {
      root: {
        color: "#46444d" // black.light
      }
    },
    MuiFormHelperText: {
      root: {
        fontWeight: 200,
        fontSize: 12,
        "&.Mui-error": {
          color: "red"
        }
      },
      contained: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    MuiOutlinedInput: {
      root: {
        fontWeight: 200,
        fontSize: 12,
        "&.Mui-error": {
          color: "red",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
          }
        }
        // "& .MuiOutlinedInput-notchedOutline": {j
        //   borderColor: "red"
        // }
      },
      input: {
        fontWeight: 600
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: 8,
            zIndex: 1100
          },
          "*::-webkit-scrollbar-track": {
            backgroundColor: "transparent"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(44, 44, 44, 0.25)"
          }
        }
      }
    }
  }
};

export default ui_overrides;
