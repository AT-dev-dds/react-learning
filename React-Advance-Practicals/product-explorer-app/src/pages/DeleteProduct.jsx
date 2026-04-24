import React, { useEffect } from "react";
import { deleteItem } from "../features/products/productThunk";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";

export default function DeleteProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const handleDelete = async () => {
      try {
        await dispatch(deleteItem(Number(id)));
        navigate("/");
      } catch (err) {
        console.log("Delete failed:", err.message);
      }
    };

    handleDelete();
  }, [id]);

  return <></>;
}
