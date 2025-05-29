'use client';

import React, { useState, useEffect } from "react";

export function ClientCopyright() {
  // Initialize with a placeholder that matches SSR
  const [year, setYear] = useState("2024");
  
  useEffect(() => {
    // Update the year on the client side
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <p className="text-center md:text-right">©Petty {year}</p>
  );
}
