import { useState } from "react";
import { ChevronDown, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const UserProfileDropdown = ({ username = "User" }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    // Clear token or auth state here
    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full hover:shadow-md"
      >
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="hidden sm:block font-medium">{username}</span>
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg z-50 text-sm text-gray-700">
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            <User size={16} />
            My Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
