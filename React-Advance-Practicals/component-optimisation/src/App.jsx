import React from "react";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";

export default function App() {
  console.log("App rendered");

  return (
    <>
      <Navbar />
      <SearchSection />
    </>
  );
}