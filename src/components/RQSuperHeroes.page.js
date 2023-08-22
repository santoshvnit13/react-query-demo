import { Link } from 'react-router-dom'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'
//you can pass fetchSuperHeroes as props after key in useQuery

export const RQSuperHeroesPage=()=>{
    const onSuccess=(data)=>{
        console.log("datafetched",data)
    }
    const onError=(error)=>{
        console.log("error occured",error)
    }
    //useQuery returns both isLoading and data
    const {isLoading,data,isError,error,isFetching,refetch}= useSuperHeroesData(onSuccess,onError)

// the select function "select:(data)=>{const returnedData=  data.data.map((hero)=>hero.name)
      // return returnedData
    // }"
    // automatically accepts data and can be used to modify data

// {onSuccess,onError} automatically accepts "data" and "error" and can perform side effects after data fetching or error occured

// onclick of a button we can fetch the data instead of when component mounts by {enabled:false} and refetch function    

// {refetchInterval:2000,refetchIntervalInBackground:true} fetches the day for every interval mentioned there


//whenever the component mounts data will refetched that means a network call will be done "{refetchOnMount:true}". true is default value.  

//whenever tab(chrome tab )looses focus data fetching happens "{refetchOnWindowFocus:true}"

// i can keep the cache time {cacheTime:5000,} 

// staletime is used when we don't want to make network calls in the mentioned time period just show whatever data fetched earlier,
//after stale time the data will be fetched and will be fresh for whatever time we provide in the {staleTime:30000}, default value is '0' seconds

//isFetching relates to background fetching

//react-query provides cache, 
// where by default it stores the data and updates if any changes happen in the data without loading the page. 
// the default cache time is 5 minutes. that means whenever we navigate,
//  from page that fetches data using useQuery hook to normal page, the time begins and counts 5 minutes to 0 minutes
   
   console.log({isLoading,isFetching})
   if (isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if (isError){
        return <h2>{error.message}</h2>
    }

    return (
    <>
    <div>RQ Super Heroes Page</div>
    {data?.data.map(hero=>{
        return <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
    })}
    {/* {data.map((hero)=><div key={hero}>{hero}</div>)} */}
    <button onClick={refetch}></button>
    </>)
}