import { useQuery } from "react-query"
import TmdbAPI from '../services/TmdbAPI'

const usePerson = (id) => {
    return useQuery(['person', id], () => TmdbAPI.getPerson(id))
}

export default usePerson