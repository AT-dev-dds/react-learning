import React,{useEffect} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProducts } from "../services/productServices.js";

 function DeleteProduct({id,search,page}) {
  const queryClient = useQueryClient();

  useEffect(() => {
  console.log(`DeleteProduct ${id} rendered`,{search,page});
});

  const mutation = useMutation({
    mutationFn: deleteProducts,

    onMutate:async(id)=>{
      
      // 1. Clear Refetch
      await queryClient.cancelQueries(["products",search,page]);

      // 2. snapshot old data 
      const previousData= queryClient.getQueryData(["products",search,page]);

      //3. optimistic update (remove instantly)
         queryClient.setQueryData(["products",search,page],(oldData)=>{
          if(!oldData) return oldData;
          return {
            ...oldData,
            products: oldData?.products.filter((product)=>product.id!==id)
          }
         });

      // 4. return snapshot for rollback 
      return {previousData}
    },

    onError:(error,id,context)=>{
   //rollback if any error 

   queryClient.setQueryData(["products",search,page],context.previousData);

   console.log(error);
    },

    onSuccess:()=>{
      queryClient.invalidateQueries(["products"])
    }

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


export default React.memo(DeleteProduct)