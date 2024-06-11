import { useParams } from "react-router-dom";
import { MarvelItem, MarvelResponse } from "./interface";
import { API_KEY, HASH, MARVELS } from "@/URL/url";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { FAVOURITES } from "@/constants";

function DetailPage() {
  const { id } = useParams<{ title: string; id: string }>();
  const [creators, setCreators] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFav, setIsFav] = useState<boolean>(false);
  const [comic, setComic] = useState<MarvelItem>({
    id: 0,
    thumbnail: { path: "", extension: "" },
    title: "",
    dates: [],
  });
  const [fav, setFav] = useState<MarvelItem[]>([]);

  const fetchData = async () => {
    try {
      const comicPromise = axios.get<MarvelResponse>(
        `${MARVELS}/comics/${id}?ts=1&apikey=${API_KEY}&hash=${HASH}`
      );
      const creatorPromise = axios.get<MarvelResponse>(
        `${MARVELS}/comics/${id}/creators?ts=1&apikey=${API_KEY}&hash=${HASH}`
      );

      const [comicResponse, creatorsResponse] = await Promise.all([
        comicPromise,
        creatorPromise,
      ]);
      const comicRes = comicResponse.data.data.results[0];
      setComic(comicRes);
      setCreators(creatorsResponse.data.data.results[0]);
      setIsLoading(false);

      // ดึงค่า Favourite มาจาก localStorage
      const favString = localStorage.getItem(FAVOURITES);
      // เช็คว่ามีค่าไหม ถ้าไม่มีค่าจะไม่ทำเงื่อนไขใน if
      // ค่าต่าง ๆ ที่ใส่ใน if จะถูกแปลงเป็น boolean
      // favString ใน if ถ้ามีค่าจะเป็น true
      // ถ้ามีค่าเป็น = undefined  หรือ null เท่ากับ เป็น false
      if (favString) {
        const favList: MarvelItem[] = JSON.parse(favString);
        // console.log(favString);
        console.log(favList);
        // เช็คว่า comic อันนี้อยู่ใน Favorites หรือป่าว
        setFav(favList);
        // มีข้อมูลที่
        setIsFav(favList.some((e) => e.id === comicRes.id));
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    setIsLoading(true);
  }, [id]);

  if (isLoading) {
    return (
      <div className="h-[890px] flex justify-center items-center">
        <ReactLoading type="bars" color="#690000" />
      </div>
    );
  }

  const addOrRemoveFavourites = () => {
    if (isFav) {
      // Remove b/c they are exist in localStorage
      const newFav = fav.filter((e) => e.id !== comic.id);
      setFav(newFav);
      setIsFav(false);
      localStorage.setItem(FAVOURITES, JSON.stringify(newFav));
    } else {
      // Add
      setFav((oldState) => {
        const newFav = [...oldState, comic];
        localStorage.setItem(FAVOURITES, JSON.stringify(newFav));
        setIsFav(true);
        return newFav;
      });
    }
  };

  return (
    <div className="max-w-[1100px] w-full h-[100vh]">
      <div className="bg-[#EC1D23] flex gap-5 pl-[10%] rounded-lg">
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
      <div className="flex flex-wrap justify-center mt-[20px] m-auto h-[80%] bg-red-200 bg-opacity-80 py-[50px] px-[50px] rounded-lg">
        <div>
          <div className=" flex justify-center py-10">
            <img
              src={`${comic?.thumbnail?.path}/portrait_fantastic.${comic?.thumbnail?.extension}`}
              alt={comic?.title}
            />
          </div>
          <div className="flex flex-col columns-1 max-w-[300px]">
            <div className="text-xl font-mono">{comic?.title}</div>
            <div>{`ID : ${comic?.id}`}</div>
            <div>{`Creators : ${creators?.fullName}`}</div>
            <div className="my-[20px] flex justify-center ">
              <button
                onClick={addOrRemoveFavourites}
                className="flex justify-center absolute rounded-lg  dark:focus:ring-blue-800 m-auto px-5 py-1 bg-green-500 shadow-md text-white"
              >
                {isFav ? "Remove from favourites" : "Add to favourites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
