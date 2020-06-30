import React from "react";
import "./Card.css";

const Card = ({ flipped, onClick, number, symbol }) => (
  <div className="card" onClick={onClick} data-number={number}>
    {flipped ? "X" : symbol}
  </div>
);

export default Card;
