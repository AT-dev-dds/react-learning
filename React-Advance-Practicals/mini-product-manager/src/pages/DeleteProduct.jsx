import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../services/productServices.js";

export default function DeleteProduct({id,search,page}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteProducts,

   onSuccess: (_, deletedId) => {
      queryClient.setQueryData(["products", search,page], (oldData) => {
        if (!oldData?.products) return oldData;

        return {
          ...oldData,
          products: oldData.products.filter(
            (product) => product.id !== deletedId
          ),
        };
      });
    },

    onError: (error) => {
      console.log("Delete Error:", error);
    },
  });

  return (
    <>
      <button
        className="btn btn-danger text-white"
        onClick={() => {
          mutation.mutate(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
