import { useEffect, useState } from "react";
import { Transaction } from "../transaction";
import "./Pagination.css";

export default function Pagination({
  pageSize,
  transactions,
  setFilteredTransactions,
}: {
  pageSize: number;
  transactions: Array<Transaction>;
  setFilteredTransactions: (transactions: Array<Transaction>) => void;
}) {
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
        <li
          className={`page ${page === i + 1 && "active"}`}
          title="page"
          key={i}
          onClick={() => onPageClick(i)}
        >
          {i + 1}
        </li>
      );
    }
    return pagesArray;
  };

  useEffect(() => {
    onPageClick(0);
  }, [transactions]);

  return (
    <ul className="pagination" title="pagination">
      {renderPages()}
    </ul>
  );
}
