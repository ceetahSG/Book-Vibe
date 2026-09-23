"use client";

import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/book.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleRead = () => {
    setReadBooks([...readBooks, book]);
    console.log(book, "book");
    toast.success(`Book added to read list: ${book.bookName}`);
  };
  return (
    <div>
      <button
        className="btn  btn-outline btn-primary rounded-xl"
        onClick={handleRead}
      >
        Read
      </button>
      ;
    </div>
  );
};

export default ReadButton;
