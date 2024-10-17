import "./Filter.css";

export default function Filter({
  filterTransactions,
}: {
  filterTransactions: (searchString: string) => void;
}) {
  return (
    <div>
      <label className="filter-label" htmlFor="filter">
        Filter by name:
      </label>
      <input
        className="filter-input"
        title="filter beneficiary"
        name="filter"
        onChange={(e) => filterTransactions(e.target.value)}
      />
    </div>
  );
}
