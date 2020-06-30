import React from "react";
import "./GamePage.css";
import { Card } from "../../components";

const GamePage = ({ deck = [], onClick, onReset }) => (
  <div className="game-page">
    <div className="deck">
      {deck.map((card, i) => (
        <Card key={i} number={i} {...card} onClick={onClick} />
      ))}
    </div>
    <button onClick={onReset}>Reset</button>
  </div>
);

export default GamePage;
