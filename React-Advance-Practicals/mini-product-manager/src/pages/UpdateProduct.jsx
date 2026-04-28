import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../services/productServices.js";
import { useState } from "react"; 

export default function UpdateProduct({ id,debouncedSearch,page }) {
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

  onMutate:async(newData,{id})=>{
   
    //Step 1: stop refetch

    await queryClient.cancelQueries(["products",debouncedSearch,page]);

    //Step 2:snapshot Previous data

    const previousUpdate= queryClient.getQueryData(["products",debouncedSearch,page]);

    // Step 3: Optimistic update

    queryClient.setQueryData(["products",debouncedSearch,page],(oldData)=>{

      if(!oldData?.products) return oldData;
      
      return {
       ...oldData,
      products:oldData.products.map((p)=>
        p.id===id?{...p, ...newData}:p
      
    ),
      }
      
    });


    //Step 4: Return snapshot
    return {previousUpdate};
  },

  onError:(error,id,context)=>{
    queryClient.setQueryData(["products",debouncedSearch,page],context.previousUpdate);
    console.log(error)
  },

onSuccess:()=>{
//  queryClient.invalidateQueries({ queryKey: ["products"] });
   setShowForm(false);
}
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
