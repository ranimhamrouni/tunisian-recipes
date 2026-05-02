import { useState } from "react";
import { recipes } from "./data/recipes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
  const [selected, setSelected] = useState(recipes[0]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = recipes.filter((recipe) => {
    const matchSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || recipe.category === category;
    return matchSearch && matchCategory;
  });

  const share = (recipe: typeof recipes[number]) => {
    const link = `${recipe.name} - ${window.location.href}`;
    navigator.clipboard.writeText(link);
    alert("Recipe copied to clipboard!");
  };

  return (
    <div className="app">
      <Navbar />
      <main className="layout">
        <Sidebar
          recipes={filtered}
          selectedId={selected?.id}
          setSelected={setSelected}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
        <RecipeDetails selected={selected} share={share} />
      </main>
    </div>
  );
}
