import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../services/productServices.js";
import { useState } from "react";

export default function UpdateProduct({ id }) {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      id,
      data: {
        ...formData,
        price: Number(formData.price),
      },
    });
  };

  const mutation = useMutation({
    mutationFn: updateProduct,

    onSuccess: (newData, Variable) => {
      const updatedId = Variable.id;

      queryClient.setQueryData(["products"], (oldData) => {
        return oldData.map((product) => {
          return product.id === updatedId ? newData : product;
        });
      });
      setShowForm(false);
    },

    onError: (error) => {
      console.log("Updation Error", error);
    },
  });

  return (
    <>
      <button
        className="btn btn-warning text-dark"
        onClick={() => {
          setShowForm(true);
        }}
      >
        Update
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Product title"
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />

          <button type="submit">
            {mutation.isPending ? "Updating..." : "Update Product"}
          </button>
        </form>
      )}
    </>
  );
}
