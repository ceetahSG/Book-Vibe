import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/type/book.type";
const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-4xl flex justify-center my-10">Books</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.slice(0, 3).map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
