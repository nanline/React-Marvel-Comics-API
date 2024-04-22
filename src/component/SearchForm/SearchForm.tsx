import { useComicListStore } from "@/store/infoData";
import { MARVELS, API_KEY, HASH } from "@/URL/url";
import { MarvelResponse } from "@/page/interface";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

function SearchForm() {
  const { setComicList, setFetchComicList, fetchComic } = useComicListStore();
  const [input, setInput] = useState("");

  // ข้อมูลที่มาจาก web
  const fetchData = async () => {
    const API1: Promise<AxiosResponse<MarvelResponse>> = axios.get(
      `${MARVELS}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`
    );
    const [comic] = await Promise.all([API1]);

    // เอาข้อมูลไปฝากไว้ใน store ของ zudtand
    setComicList({
      data: comic.data.data.results,
      loading: true,
      error: null,
    });

    // เก็บค่าเดิม
    setFetchComicList({
      data: comic.data.data.results,
      loading: false,
      error: null,
    });
    console.log({
      comicsData: comic?.data,
    });
    // console.log({
    //   comicsOnSale: comic.data.data.results[0].dates[0]
    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReset = () => {
    // รีค่า
    setInput("");
    // เซ็ตให้ค่าของ obj ด้านล่างกลับมาเป็นเหมือนเดิมทั้งหมด
    setComicList({
      data: fetchComic.data,
      loading: false,
      error: null,
    });
  };

  const handleSubmit = (event: any) => {
    // บอกให้ Browser ไม่ต้อง refresh
    event.preventDefault();

    if (input === "") {
      setComicList({
        data: fetchComic.data,
        loading: false,
        error: null,
      });
    } else {
      const filterComics = fetchComic.data.filter((c) =>
        c.title.includes(input)
      );
      setComicList({
        data: filterComics,
        loading: false,
        error: null,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="my-2 ml-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-red-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-red-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="search"
              id="default-search"
              className="flex capitalize mt-5 w-full p-4 ps-10 text-sm text-red-800 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-red-700 dark:border-red-500 dark:placeholder-red-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Search comics"
            />
            <button
              type="submit"
              className="mr-20 text-white absolute end-2.5 bottom-2.5 bg-red-600 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Search
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="mr-1 text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
