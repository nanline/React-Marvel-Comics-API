import { useEffect } from "react";
import NavBar from "../component/Item/navBar";
import CardList from "@/component/card";
import FooterPage from "@/component/Item/footer";
import { useComicListStore } from "@/store/infoData";
import ReactLoading from "react-loading";

const HomePage = () => {
  // ดึงข้อมูล comic ออกมาจาก store ของ zudtand
  const { comic, fetchComic } = useComicListStore();

  useEffect(() => {}, []);

  return (
    <div className="max-w-[1100px]">
      <div className="flex justify-center">
        <NavBar />
        {fetchComic.loading && (
          <div className="h-[890px] flex justify-center items-center">
            <ReactLoading type="bars" color="#690000" />
          </div>
        )}
        {!fetchComic.loading && <CardList data={comic.data} />}
      </div>
      <div className="flex justify-center">
        <FooterPage />
      </div>
    </div>
  );
};

export default HomePage;
