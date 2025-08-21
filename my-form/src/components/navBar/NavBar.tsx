import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  function handleNavigation(newValue: number) {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/login");
        break;
      case 1:
        navigate("/signup");
        break;
      default:
        navigate("/");
        break;
    }
  }

  return (
    <Box sx={{ width: 700 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction label="Login" />
        <BottomNavigationAction label="signup" />
      </BottomNavigation>
    </Box>
  );
}
