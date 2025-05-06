import axios from "axios";
import React, { useEffect, useState } from "react";

const Button = () => {
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div>
        {
          product.map((value, index) => {
            return (
              <div>
                <p>{value.price}</p>
              </div>);
          })
        }
      </div>
    </>
  );
};

export default Button;
