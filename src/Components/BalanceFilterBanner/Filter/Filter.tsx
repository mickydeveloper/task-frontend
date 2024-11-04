import { FilterInput } from "./FilterStyles";

interface FilterProps {
  filterTransactions: (searchString: string) => void;
}

export default function Filter({ filterTransactions }: FilterProps) {
  return (
    <div>
      <label className="filter-label" htmlFor="filter">
        Filter by name:
      </label>
      <FilterInput
        title="filter beneficiary"
        name="filter"
        onChange={(e) => filterTransactions(e.target.value)}
      />
    </div>
  );
}
