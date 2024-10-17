import "./Filter.css";

export default function Filter({
  filterTransactions,
}: {
  filterTransactions: (searchString: string) => void;
}) {
  return (
    <>
      <label className="filter-label" htmlFor="filter">
        Search by name:
      </label>
      <input
        className="filter"
        title="filter beneficiary"
        name="filter"
        onChange={(e) => filterTransactions(e.target.value)}
      />
    </>
  );
}
