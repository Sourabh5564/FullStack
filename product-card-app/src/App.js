import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      padding: "40px"
    }}>
      <ProductCard
        title="Wireless Headphones"
        price="2999"
        image="https://via.placeholder.com/250"
        inStock={true}
      />

      <ProductCard
        title="Smart Watch"
        price="4999"
        image="https://via.placeholder.com/250"
        inStock={false}
      />
    </div>
  );
}

export default App;
