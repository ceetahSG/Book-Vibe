import React from "react";
import Image from "next/image";
import { IBook } from "@/type/book.type";
import Link from "next/link";
interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <Link href={`/books/${book.bookId}`}>
      <div className="card overflow-hidden rounded-2xl bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Image */}
        <figure className="h-72 bg-base-200 p-6">
          <Image
            src={book.image}
            alt={book.bookName}
            width={200}
            height={300}
            className="h-full w-full object-contain"
          />
        </figure>

        {/* Content */}
        <div className="card-body">
          {/* Category */}
          <div className="flex items-center justify-between">
            <span className="badge badge-primary">{book.category}</span>

            <div className="flex items-center gap-1 text-sm font-semibold">
              <span className="text-yellow-500">★</span>
              {book.rating}
            </div>
          </div>

          {/* Book Name */}
          <h2 className="card-title mt-2 text-2xl font-bold">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-500">
            by{" "}
            <span className="font-semibold text-gray-700">{book.author}</span>
          </p>

          {/* Review */}
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Publisher */}
          <p className="mt-3 text-sm text-gray-500">
            Published by{" "}
            <span className="font-semibold text-gray-800">
              {book.publisher}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
