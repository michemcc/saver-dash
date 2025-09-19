import { Box, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

function AuthRoot() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", height: "100vh" }}
    >
      <Box
        sx={{
          backgroundColor: grey[400],
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography variant="h6" component="h1" p={5} fontWeight={600}>
          Saver Dash 
        </Typography>
        <Box p={5} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link href="https://github.com/michemcc" variant="body2" sx={{ color: grey[800], "&:hover": { color: grey[700] } }}>
            M. E. McCarthy - 2025
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthRoot;
