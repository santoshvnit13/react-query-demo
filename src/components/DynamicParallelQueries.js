//when we don't know how many times we have to fetch the data based on dynamic 'here heroIds' we use {useQueries}
import { useQueries } from "react-query"
import axios from "axios" 
const fetchSuperHero=(heroId)=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const DynamicParallel=({heroIds})=>{
    //we pass list and return 'key, fetcherfunction' corresponding to particular item from list
    //returns an array of queryResults
   const queryResults= useQueries(heroIds.map(heroId=>{
        return {queryKey:['super-hero',heroId],
        queryFn:fetchSuperHero(heroId)}
    }))
    console.log({queryResults})
    //so that we have both key and value, when we console with an object
    return (<>
        Dynamic Parallel
    </>)
}