import { IBook } from "@/type/book.type";
import React from "react";
import Image from "next/image";
import ReadButton from "@/components/BookDetails/ReadButton";
import WishListButton from "@/components/BookDetails/WishListButton";
interface BookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};
const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => book.bookId === Number(id),
  ) as IBook;
  console.log(book);
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="card overflow-hidden rounded-3xl bg-base-100 shadow-xl lg:card-side">
        {/* Book Image */}
        <figure className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-10 lg:w-2/5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={550}
            className="max-h-[500px] w-auto rounded-xl object-contain shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </figure>

        {/* Book Information */}
        <div className="card-body gap-5 p-8 lg:w-3/5 lg:p-12">
          {/* Category + Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-primary rounded-full px-4 py-3">
              {book.category}
            </span>

            <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2">
              <span className="text-lg text-yellow-500">★</span>
              <span className="font-bold">{book.rating}</span>
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
              {book.bookName}
            </h2>

            <p className="mt-2 text-base text-base-content/60">
              by{" "}
              <span className="font-semibold text-base-content">
                {book.author}
              </span>
            </p>
          </div>

          {/* Review */}
          <div>
            <h3 className="mb-2 text-lg font-bold">About the book</h3>

            <p className="text-sm leading-7 text-base-content/70">
              {book.review}
            </p>
          </div>

          {/* Book Details */}
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-5 sm:grid-cols-3">
            <div>
              <p className="text-xs text-base-content/50">Total Pages</p>
              <p className="font-bold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Publisher</p>
              <p className="font-bold">{book.publisher}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/50">Published</p>
              <p className="font-bold">{book.yearOfPublishing}</p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="mb-2 text-sm font-semibold">Tags</p>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <ReadButton book={book}></ReadButton>

            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
