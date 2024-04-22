import SearchForm from "@/component/SearchForm";

function NavBar() {
  return (
    <div className="fixed w-[90%] rounded-lg z-10 flex min-w-[270px] max-w-[1100px] bg-[#EC1D23] shadow-md lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full mx-5">
        <img
          className="flex max-h-[50px] mt-[20px]"
          src="https://theme.zdassets.com/theme_assets/2376335/f68b4cede823c3050cf95809224868d201a3d53a.jpg"
          alt="logo MARVEL"
        />
        <div className="flex justify-center items-center gap-[20px] ml-[20px]">
          <button className="text-white">
            <a href="/favourite">Favourite</a>
          </button>
        </div>
        <div className="w-full">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
