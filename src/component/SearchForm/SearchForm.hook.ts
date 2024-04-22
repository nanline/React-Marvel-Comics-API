import { API_KEY, HASH, MARVELS } from "@/URL/url";
import { MarvelResponse } from "@/page/interface";
import { useComicListStore } from "@/store/infoData";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

const useSearchForm = () => {
    const { setComicList } = useComicListStore();

    const fetchData = async () => {
        const API1: Promise<AxiosResponse<MarvelResponse>> = axios.get(
            `${MARVELS}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`
        );
        const [comic] = await Promise.all([API1]);

        setComicList({
            data: comic.data.data.results,
            loading: false,
            error: null,
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return { fetchData };
};

export { useSearchForm };
