import { createGlobalStyle } from "styled-components";
import WeatherBackground from "./assets/Weather-app_Background-image.png";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background: url(${WeatherBackground});
  background-size: cover;
  /* Centering the app */
  display: grid;
  justify-content: center;
  align-items: center;
}

body footer {
  /* position: absolute; */
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  /* height: [footer-height]; */
}
`;

export default GlobalStyle;