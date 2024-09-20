import React from "react";
import { QuoteItem } from "./QuoteItem";
import { Main } from "../../utils/constants/Main";

export const QuoteList = () => {
  return (
    <ul>
      {Main.map((item) => (
        <QuoteItem key={item.title} {...item} />
      ))}
    </ul>
  );
};
