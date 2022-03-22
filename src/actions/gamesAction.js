import axios from 'axios'
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
  gameDetailsURL
} from '../api'

export const loadPopular = () => {
  return async dispatch => {
    const popularData = await axios.get(popularGamesURL())

    dispatch({
      type: 'FETCH_POPULAR',
      payload: {
        popular: popularData.data.results
      }
    })
  }
}

export const loadUpcoming = () => {
  return async dispatch => {
    const upcomingData = await axios.get(upcomingGamesURL())

    dispatch({
      type: 'FETCH_UPCOMING',
      payload: {
        upcoming: upcomingData.data.results
      }
    })
  }
}

export const loadNew = () => {
  return async dispatch => {
    const newData = await axios.get(newGamesURL())

    dispatch({
      type: 'FETCH_NEW',
      payload: {
        new: newData.data.results
      }
    })
  }
}

export const loadSearched = query => {
  return async dispatch => {
    const newData = await axios.get(searchGameURL(query))

    dispatch({
      type: 'FETCH_SEARCHED',
      payload: {
        searched: newData.data.results
      }
    })
  }
}

export const loadDetail = id => {
  return async dispatch => {
    const newData = await axios.get(gameDetailsURL(id))

    dispatch({
      type: 'FETCH_DETAIL',
      payload: {
        detail: newData.data
      }
    })
  }
}
