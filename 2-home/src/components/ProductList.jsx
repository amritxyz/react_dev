import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {

  const [products, setProduct] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get("https://faksestoreapi.com/products");
    setProduct(res.data)
    console.log(res.data, "Data fetch");
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
    </>
  );
}

export default ProductList;
