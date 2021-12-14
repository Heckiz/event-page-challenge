import { FC } from 'react'
import { useAxios } from '../../hooks/useAxios'

const EventList: FC = () => {

   const {response, error, loading} = useAxios({
        method:"GET",
        url:"./events"
    })
    console.log(response)
    return (
        <>
        {loading ? <span>loading</span> :
        error ? <span>error</span> : 
        <div>

            {
                response?.data.map(event=>{
                    console.log(event)
                })
            }
        </div>
        }
        </>
    )
}

export default EventList
