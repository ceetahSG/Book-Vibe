import React from "react";
import { IBook } from "@/type/book.type";
import BookCard from "@/components/shared/BookCard";
const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const BooksPage = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <section className="container mx-auto px-4 pb-8 sm:pb-12">
      <h2 className="my-8 flex justify-center text-3xl font-bold sm:my-10 sm:text-4xl">Books</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book: IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default BooksPage;
