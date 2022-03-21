import userEvent from "@testing-library/user-event";
import React from "react";
import { username, city } from src/data/userEvent.js;

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
