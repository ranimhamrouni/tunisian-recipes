type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      className="search-input"
      placeholder="Search recipes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search recipes"
    />
  );
}
