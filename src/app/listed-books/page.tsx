"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IBook } from "@/type/book.type";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sorting function
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  // Sort both lists separately
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlist);

  // Decide which list to display
  const books = activeTab === "read" ? sortedReadBooks : sortedWishlistBooks;

  // Handle sorting option
  const handleSort = (value: "rating" | "pages" | "year") => {
    setSortBy(value);

    // Close dropdown after selecting an option
    setIsSortOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="mb-6 rounded-xl bg-base-200 py-5 text-center">
        <h1 className="text-xl font-bold">Books</h1>
      </div>

      {/* Sort Button */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          {/* Sort Button */}
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="btn btn-success btn-sm text-white"
          >
            Sort By
            <span>⌄</span>
          </button>

          {/* Sort Options */}
          {isSortOpen && (
            <ul className="absolute left-1/2 z-10 mt-2 w-40 -translate-x-1/2 rounded-box bg-base-100 p-2 shadow">
              <li>
                <button
                  type="button"
                  className="w-full rounded-lg px-3 py-2 text-left hover:bg-base-200"
                  onClick={() => handleSort("rating")}
                >
                  Rating
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full rounded-lg px-3 py-2 text-left hover:bg-base-200"
                  onClick={() => handleSort("pages")}
                >
                  Pages
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="w-full rounded-lg px-3 py-2 text-left hover:bg-base-200"
                  onClick={() => handleSort("year")}
                >
                  Year
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lifted border-b border-base-300">
        <button
          className={`tab ${activeTab === "read" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("read")}
        >
          Read Books
        </button>

        <button
          className={`tab ${activeTab === "wishlist" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist Books
        </button>
      </div>

      {/* Book List */}
      <div className="mt-4 space-y-4">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col gap-5 rounded-xl border border-base-300 bg-base-100 p-4 transition-all duration-300 hover:shadow-md sm:flex-row"
          >
            {/* Image */}
            <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-base-200 p-4 sm:w-32">
              <Image
                width={150}
                height={200}
                src={book.image}
                alt={book.bookName}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Book Information */}
            <div className="flex min-w-0 flex-1 flex-col">
              {/* Title */}
              <h2 className="font-serif text-lg font-bold">{book.bookName}</h2>

              {/* Author */}
              <p className="mt-1 text-sm">
                By : <span className="font-medium">{book.author}</span>
              </p>

              {/* Tags + Year */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold">Tag</span>

                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-600"
                  >
                    #{tag}
                  </span>
                ))}

                <span className="text-base-content/60">
                  ◉ &nbsp; Year of Publishing: {book.yearOfPublishing}
                </span>
              </div>

              {/* Publisher + Pages */}
              <div className="mt-3 flex flex-wrap gap-5 text-xs text-base-content/60">
                <span>♧ &nbsp; Publisher: {book.publisher}</span>

                <span>▣ &nbsp; Page {book.totalPages}</span>
              </div>

              {/* Divider */}
              <div className="my-3 border-t border-base-300" />

              {/* Bottom Information */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  Category: {book.category}
                </span>

                <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-medium text-orange-500">
                  Rating: {book.rating}
                </span>

                <Link
                  href={`/books/${book.bookId}`}
                  className="rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {books.length === 0 && (
          <div className="rounded-xl border border-dashed border-base-300 py-16 text-center">
            <h2 className="text-lg font-semibold">No books found</h2>

            <p className="mt-2 text-sm text-base-content/60">
              Add some books to see them here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
