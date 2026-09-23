"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/type/book.type";
import React, { useContext } from "react";

import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

// #region Sample data

// #endregion
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);
  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: book.rating,
    amt: book.yearOfPublishing,
  }));

  return (
    <div className="container mx-auto my-5">
      {readBooks.length === 0 ? (
        <p className="text-center text-gray-500 ">No read books yet.</p>
      ) : (
        <BarChart
          className="mx-auto"
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Bar dataKey="uv" shape={TriangleBar} activeBar>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
          {/* <RechartsDevtools /> */}
        </BarChart>
      )}
    </div>
  );
};

export default ReadBooks;
