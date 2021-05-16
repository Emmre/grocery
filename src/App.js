import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
