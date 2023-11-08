import React from "react";
import CounterApplication from "./CounterApplication";

function HomePage() {
  return (
    <>
      <CounterApplication countValue={0} />
    </>
  );
}

export default HomePage;
