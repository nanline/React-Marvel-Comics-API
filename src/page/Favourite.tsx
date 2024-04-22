import { FAVOURITES } from "@/constants";
import { MarvelItem } from "@/page/interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favourite() {
  const [favs, setFavs] = useState<MarvelItem[]>([]);
  const [isFavs, setIsFavs] = useState<boolean>();

  useEffect(() => {
    const favourites = localStorage.getItem(FAVOURITES);
    // ไม่มี if ไม่ได้ เพราะต้องเช็คว่ามีค่าหรือไม่ ถ้าไม่มีค่าจะไม่ทำตามใน if
    if (favourites) {
      const temp = JSON.parse(favourites);
      setFavs(temp);
    }
  }, []);

  return (
    <div className="h-[100vh]">
      <div>
        <div className="bg-[#EC1D23] flex gap-5 pl-[10%] w-full max-h-[80px] rounded-lg">
          <div className="flex justify-center items-center">
            <img
              className="max-h-[50px] my-[20px]"
              src="https://theme.zdassets.com/theme_assets/2376335/f68b4cede823c3050cf95809224868d201a3d53a.jpg"
              alt="logo MARVEL"
            />
          </div>
          <button className="text-white">
            <a href="/">Home</a>
          </button>
          <button className="text-white">
            <a href="/favourite">Favourite</a>
          </button>
        </div>
      </div>
      <div className="bg-red-300 bg-opacity-70 my-5 py-5 px-5 rounded-lg">
        <div className="flex justify-center flex-wrap gap-[20px] max-w-[1100px] my-5">
          {favs.map((e) => (
            <div
              key={e.id}
              className="p-[20px] bg-slate-100 rounded-md justify-center hover:scale-110"
            >
              <div className="gap-[20px] flex justify-center">
                <Link to={`/detail/${e?.id}`}>
                  <img
                    className=""
                    src={`${e.thumbnail.path}/portrait_fantastic.${e.thumbnail.extension}`}
                  />
                </Link>
              </div>
              <div className="flex flex-wrap max-w-[250px] mt-2">
                <div>{e.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
