import axios from 'axios'
import { searchGameURL } from '../api'

export const loadSearched = query => {
  return async dispatch => {
    const newData = await axios.get(searchGameURL(query))

    dispatch({
      type: 'FETCH_SEARCHED',
      payload: {
        searched: newData.data.results,
        query: query
      }
    })
  }
}
