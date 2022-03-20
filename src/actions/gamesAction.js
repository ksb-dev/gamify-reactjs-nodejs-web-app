import axios from 'axios'
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

export const loadGames = () => {
  return async dispatch => {
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newData = await axios.get(newGamesURL())

    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        new: newData.data.results
      }
    })
  }
}
