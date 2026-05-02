import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import type { Recipe } from "../data/recipes";

type SidebarProps = {
  recipes: Recipe[];
  selectedId: number;
  setSelected: (recipe: Recipe) => void;
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
};

export default function Sidebar({
  recipes,
  selectedId,
  setSelected,
  search,
  setSearch,
  category,
  setCategory
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="panel-header">
        <h2>Recipes</h2>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />

      <div className="recipe-list">
        {recipes.length === 0 ? (
          <div className="empty-state">No recipes match your search.</div>
        ) : (
          recipes.map((recipe) => (
            <button
              key={recipe.id}
              type="button"
              className={recipe.id === selectedId ? "recipe-card selected" : "recipe-card"}
              onClick={() => setSelected(recipe)}
            >
              <strong>{recipe.name}</strong>
              <span>{recipe.category}</span>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}
