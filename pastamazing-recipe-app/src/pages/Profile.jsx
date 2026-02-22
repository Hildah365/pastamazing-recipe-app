import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-body relative">

      {/* Top Bar */}
      <div className="flex justify-between items-center p-6 bg-terracotta text-white shadow-sm">
        <h1 className="text-2xl font-heading">My Kitchen</h1>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-6 top-20 bg-linen shadow-cozy rounded-cozy w-48 p-4 space-y-3 text-cocoa z-10">
          <Link to="/" className="block hover:text-terracotta">Home</Link>
          <Link to="/profile" className="block hover:text-terracotta">Profile</Link>
          <Link to="/popular" className="block hover:text-terracotta">Popular</Link>
          <Link to="/recipes" className="block hover:text-terracotta">Pasta Recipes</Link>
          <button className="block w-full text-left hover:text-terracotta">
            Log Out
          </button>
        </div>
      )}

      {/* Profile Card */}
      <div className="flex justify-center mt-16 px-6">
        <div className="bg-linen rounded-cozy shadow-cozy p-10 text-center w-full max-w-md">

          {/* Profile Image */}
          <img
            src="https://source.unsplash.com/200x200/?woman,portrait"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-sage"
          />

          {/* Name */}
          <h2 className="mt-6 text-2xl font-heading text-terracotta">
            Hildah Juma
          </h2>

          {/* Favorite Recipe */}
          <p className="mt-3 text-cocoa">
            Favorite Recipe:
            <span className="block font-semibold text-sage mt-1">
              Fettuccine Alfredo
            </span>
          </p>

          {/* Buttons */}
          <div className="mt-8 space-y-4">

            <Link to="/add">
              <button className="w-full bg-sage text-white py-3 rounded-full hover:bg-cocoa transition">
                + Add Recipe
              </button>
            </Link>

            <button className="w-full bg-butter text-cocoa py-3 rounded-full hover:bg-terracotta hover:text-white transition">
              Edit Profile
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
