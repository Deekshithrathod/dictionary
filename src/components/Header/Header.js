import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? "#000" : "#fff",
      },
      type: LightMode ? "light" : "dark",
    },
  });
  const handleChange = (Language) => {
    setCategory(Language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            value={word}
            onChange={(event) => {
              setWord(event.target.value);
            }}
            className="search"
            label="Search a Word"
            id="standard-basic"
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(event) => {
              handleChange(event.target.value);
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
