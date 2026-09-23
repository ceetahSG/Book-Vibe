"use client";
import { IBook } from "@/type/book.type";
import React, { createContext, ReactNode, useState } from "react";
interface IBooksContext {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}
export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: () => {},
  wishlist: [],
  setWishList: () => {},
});
const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishList] = useState<IBook[]>([]);
  const sharedData = { readBooks, setReadBooks, wishlist, setWishList };
  return (
    <BooksContext.Provider value={sharedData}>
      {" "}
      {children}{" "}
    </BooksContext.Provider>
  );
};
export default BooksProvider;
