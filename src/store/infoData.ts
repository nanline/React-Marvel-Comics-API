import { create } from 'zustand'
import { MarvelItem } from '@/page/interface'

// ค่าเริ่มต้น
const initStore = {
    comic: {
        data: [],
        loading: true,
        error: null
    },
    fetchComic: {
        data: [],
        loading: true,
        error: null
    }
}

type ComicType = {
    data: MarvelItem[],
    loading: boolean,
    error: null | object
}

type UseComicListStoreType = {
    comic: ComicType,
    fetchComic: ComicType

    setComicList: (value: ComicType) => void;
    setFetchComicList: (value: ComicType) => void;
    clearComic: () => void;
}

export const useComicListStore = create<UseComicListStoreType>((set) => ({
    ...initStore,
    setComicList: (value: ComicType) => set({ comic: value }),
    setFetchComicList: (value: ComicType) => set({ fetchComic: value }),
    clearComic: () => set({ ...initStore })
}))