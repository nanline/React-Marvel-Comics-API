import { FAVOURITES } from "@/constants";
import { MarvelItem } from "@/page/interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favourite() {
  const [favs, setFavs] = useState<MarvelItem[]>([]);
  // const [isFavs, setIsFavs] = useState<boolean>();

  useEffect(() => {
    const favourites = localStorage.getItem(FAVOURITES);
    // ไม่มี if ไม่ได้ เพราะต้องเช็คว่ามีค่าหรือไม่ ถ้าไม่มีค่าจะไม่ทำตามใน if
    if (favourites) {
      const temp = JSON.parse(favourites);
      setFavs(temp);
    }
  }, []);

  return (
    <div className="min-h-[980px] w-[90%] max-w-[1100px]">
      <div className="py-28">
        <div className="bg-red-300 bg-opacity-70 rounded-lg flex justify-center flex-wrap gap-[30px] max-w-[1100px] min-h-[300px] py-10">
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
