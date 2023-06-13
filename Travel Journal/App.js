import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.key} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}
