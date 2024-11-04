import { useEffect, useState } from "react";
import { Transaction } from "../transaction";
import { PageWrapper, PaginationWrapper } from "./PaginationStyles";

interface PaginationProps {
  pageSize: number;
  transactions: Array<Transaction>;
  setFilteredTransactions: (transactions: Array<Transaction>) => void;
}

export default function Pagination({
  pageSize,
  transactions,
  setFilteredTransactions,
}: PaginationProps) {
  const [page, setPage] = useState(1);
  const numberOfPages = Math.ceil(transactions.length / pageSize);

  const onPageClick = (i: number) => {
    setPage(i + 1);
    const newArray = [...transactions];
    setFilteredTransactions(newArray.splice(i * 20, i * 20 + 20));
  };

  const renderPages = () => {
    const pagesArray = [];
    for (let i = 0; i < numberOfPages; i++) {
      pagesArray.push(
        <PageWrapper
          className={`${page === i + 1 && "active"}`}
          title="page"
          key={i}
          onClick={() => onPageClick(i)}
        >
          {i + 1}
        </PageWrapper>
      );
    }
    return pagesArray;
  };

  useEffect(() => {
    onPageClick(0);
  }, [transactions]);

  return (
    <PaginationWrapper title="pagination">{renderPages()}</PaginationWrapper>
  );
}
