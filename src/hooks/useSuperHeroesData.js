//creating custom useQuery hook so that it can imported and used in any component
import { useQuery  } from "react-query" 
import axios from "axios" 
const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes')
}
export const useSuperHeroesData=(onSuccess,onError)=>{
    return useQuery('super-heroes',fetchSuperHeroes,{onSuccess,onError,
    //     select:(data)=>{
    //     const returnedData=  data.data.map((hero)=>hero.name)
    //     return returnedData
    //   }
    })
}