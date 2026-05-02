type CategoryFilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

const categories = ["All", "Condiment", "Street Food", "Soup", "Main Dish", "Dessert", "Traditional Stew"];

export default function CategoryFilter({ category, setCategory }: CategoryFilterProps) {
  return (
    <select
      className="category-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      aria-label="Filter by category"
    >
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
