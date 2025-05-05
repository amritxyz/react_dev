import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from API
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      console.log("Data fetched:", res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((val, item) => (
        <ProductCard
          key={item}
          title={val.title}
          image={val.image}
          price={val.price}
          category={val.category}
          rating={val.rating.rate}

        />
      ))}
    </div>

  );
};

export default Product;
