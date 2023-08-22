import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"

export const RQSuperHeroePage=()=>{
    const {heroId}=useParams()
    const {isLoading,isError,error,data}=useSuperHeroData(heroId) 
    if (isLoading){
        return <h1>Loading...</h1>
    }

    if (isError){
        return <h1>{error.message}</h1>
    }

    return(
        <div>
            {data?.data.name}
    {data?.data.alterEgo}        </div>
    )
}