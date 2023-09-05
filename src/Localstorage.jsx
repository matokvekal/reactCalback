import React, { useState, useEffect, useMemo } from "react";

function localstorage() {
  const [names, setNames] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const [isMemoProcessing, setIsMemoProcessing] = useState(false);

  const clearResults = () => {
   setFilteredNames([]);
};

  useEffect(() => {
    function fetchNames() {
      try {
        const storedNames = localStorage.getItem("names");
        if (storedNames && Array.isArray(JSON.parse(storedNames))) {
          setNames(JSON.parse(storedNames));
        } else {
          console.error("No names found in localStorage or invalid format.");
        }
      } catch (error) {
        console.error("Error fetching names:", error);
      }
    }

    fetchNames();
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("names");
    setNames([]);
    setFilteredNames([]);
  };

  const handleSearch = () => {
    if (!query) return;
    const storedNames = JSON.parse(localStorage.getItem("names") || "[]");
    const result = storedNames.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setNames(storedNames);
    setFilteredNames(result);

  };




  const generateAndStoreNames = () => {
    clearLocalStorage();
    const generatedNames = [];
    const baseNames = [
      "Alice",
      "Bob",
      "Charlie",
      "Dana",
      "Eva",
      "Frank",
      "Grace",
      "Harry",
      "Ivy",
      "Jack",
    ];
    for (let i = 0; i < 20000; i++) {
      for (let name of baseNames) {
        generatedNames.push(name + i);
      }
    }

    localStorage.setItem("names", JSON.stringify(generatedNames));
    setNames(generatedNames);
    alert(" names generated and stored!");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <button onClick={generateAndStoreNames}>
        Generate and Store 1,000 Names
      </button>
      <button onClick={clearLocalStorage}>Clear LocalStorage</button>
      <button onClick={clearResults}>Clear Results</button> 
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Enter letter..."
      />

      <button onClick={handleSearch}>Search</button>
      
      <div>
        <h3>Filtered Names:</h3>
        {isMemoProcessing && <p>Loading...</p>}
        {filteredNames.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default localstorage;
