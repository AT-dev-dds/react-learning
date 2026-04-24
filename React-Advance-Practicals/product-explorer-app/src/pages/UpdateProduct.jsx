import React, { useState } from "react";
import { updateItem } from "../features/products/productThunk";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function UpdateProduct() {
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    price: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateItem({ id, data: updatedProduct }));
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Product title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />

        <button type="submit">Update Product</button>
      </form>
    </>
  );
}
