import { useQuery } from "react-query" 
import axios from "axios" 
const fetchUserByemial=(email)=>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesbychannelId=(channelId)=>{
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}
export const DependentQueriesPage=({email})=>{ 
    const {data:user}=useQuery(["user",email],()=>fetchUserByemial(email)) 
    const channelId=user?.data.channelId 
    useQuery(['courses',channelId],()=>fetchCoursesbychannelId(channelId),{enabled:!!channelId})
    return (
        <div>
            Dependent queries page
        </div>
    )
}