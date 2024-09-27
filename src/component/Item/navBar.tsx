import SearchForm from "@/component/SearchForm";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed w-[90%] rounded-lg z-10 flex min-w-[270px] max-w-[1100px] bg-[#EC1D23] shadow-md lg:flex-wrap lg:justify-start lg:py-1 mt-2">
      <div className="flex w-full items-center py-3 px-5 gap-3 ">
        <img
          className="max-h-[50px]"
          src="https://theme.zdassets.com/theme_assets/2376335/f68b4cede823c3050cf95809224868d201a3d53a.jpg"
          alt="logo MARVEL"
        />
        <div className="text-white">
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
        <div className="text-white">
          <button>
            <Link to="/favourite">Favourite</Link>
          </button>
        </div>
        <div className="w-full hidden sm:block space-x-1">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
