"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishList } = useContext(BooksContext);
  const handleWishList = () => {
    toast.success(`Book added to wishlist: ${book.bookName}`);
    setWishList([...wishlist, book]);
    console.log(book, "book");
  };
  return (
    <div>
      <button className="btn  btn-primary rounded-xl" onClick={handleWishList}>
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
