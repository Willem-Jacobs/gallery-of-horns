import { Component } from "react";

import HornedBeast from "./HornedBeast";
import "./Main.css";
import dataBeasts from "../data.json";

class Main extends Component {
  render() {
    return (
      <main>
        {dataBeasts.map((beast, index) => (
          <HornedBeast
            key={index}
            title={beast.title}
            description={beast.description}
            imageUrl={beast.image_url}
            horns={beast.horns}
          />
        ))}
      </main>
    );
  }
}

export default Main;
