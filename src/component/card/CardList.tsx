import { MarvelItem } from "@/page/interface";
import { Link } from "react-router-dom";

interface CardListProps {
  data: MarvelItem[];
}

function CardList(props: CardListProps) {
  const data = props.data;

  return (
    <div className="flex flex-wrap gap-5 drop-shadow-xl w-[85%] justify-center">
      {data.map((mItem) => (
        <div
          key={mItem.id}
          className="bg-gray-100 max-w-[210px] border-0 hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:"
        >
          <div className="flex justify-center p-5">
            <Link to={`/detail/${mItem.id}`}>
              <img
                className="rounded-t-lg"
                src={`${mItem.thumbnail.path}/portrait_fantastic.${mItem.thumbnail.extension}`}
                alt=""
              />
            </Link>
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {mItem.id}
              </h5>
            </a>
            <div className="flex flex-wrap ">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {mItem.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
