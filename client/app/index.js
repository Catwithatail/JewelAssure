"use client";

import React, { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }, []);

  return (
    <div>
      <h1>Fetch Example</h1>
    </div>
  );
};

export default Index;
