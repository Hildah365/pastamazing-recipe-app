import { recipes } from "../data/recipes";

const Home = () => {
  return (
    <div className="min-h-screen bg-secondary p-8">
      <h2 className="text-3xl font-bold text-dark text-center mb-10">
        Discover Our Signature Pasta Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-primary">
              {recipe.title}
            </h3>

            <button className="mt-4 bg-accent text-dark px-4 py-2 rounded-full hover:bg-olive hover:text-white transition">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
