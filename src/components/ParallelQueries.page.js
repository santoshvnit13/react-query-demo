//data fetching using multiple useQery hooks

import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes=()=>{
    return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends=()=>{
    return axios.get("http://localhost:4000/friends")
}
export const ParallelQueriesPage=()=>{
        const {data:superheroesdata}    =useQuery('super-heroes',fetchSuperHeroes)
        const {data:friendsData}   = useQuery('friends',fetchFriends)

        
    return(
        <div>ParallelQueriesPage</div>
    )
}