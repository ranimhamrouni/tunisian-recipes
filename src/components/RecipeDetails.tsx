import type { Recipe } from "../data/recipes";

type RecipeDetailsProps = {
  selected: Recipe | null;
  share: (recipe: Recipe) => void;
};

export default function RecipeDetails({ selected, share }: RecipeDetailsProps) {
  if (!selected) {
    return (
      <section className="details empty-details">
        <h2>Select a recipe to explore</h2>
        <p>Search or filter recipes from the list on the left.</p>
      </section>
    );
  }

  return (
    <section className="details">
      <div className="details-hero">
        <img src={selected.image} alt={selected.name} />
      </div>
      <div className="details-content">
        <div className="detail-intro">
          <div>
            <h2>{selected.name}</h2>
            <p className="culture-text">{selected.culture}</p>
          </div>
          <button className="share-button" onClick={() => share(selected)}>
            Share Recipe
          </button>
        </div>

        <div className="meta-grid">
          <span>Category: {selected.category}</span>
          <span>Time: {selected.time}</span>
          <span>Difficulty: {selected.difficulty}</span>
        </div>

        <div className="details-section">
          <h3>Ingredients</h3>
          <ul>
            {selected.ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3>Steps</h3>
          <ol>
            {selected.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
