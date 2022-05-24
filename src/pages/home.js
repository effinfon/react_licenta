import { React } from "react"

import { SearchBar } from "../components/search"
import { Map } from "../components/map"
import { Feed } from "../components/feed"

export function Home () {
    return (
        <>
            <SearchBar/>
            <Map/>
            <Feed/>
        </>
    );
}