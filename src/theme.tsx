import "@fontsource/inter";
import { Components, createTheme, PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9dbe92ff",
    },
    background: {
      default: "#f7f2f2ff", //background
      paper: "#cfcbcbff", //borders and dividers
    },
    text: {
      primary: "#3d3b3bff",
      secondary: "#575555ff",
    },
  } as PaletteOptions,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  } as TypographyOptions,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: `1px solid #928f8fff`,
          "& .MuiDataGrid-withBorderColor": {
            borderColor: "#928f8fff",
          },
        },
      },
    },
  } as Components,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00863A",
    },
    background: {
      default: "#080808", //background
      paper: "#2b2b2b", //borders and dividers
    },
    text: {
      primary: "#fff",
      secondary: "#8a8a8a",
    },
  } as PaletteOptions,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  } as TypographyOptions,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: `1px solid #2b2b2b`,
          "& .MuiDataGrid-withBorderColor": {
            borderColor: "#2b2b2b",
          },
        },
      },
    },
  } as Components,
});
