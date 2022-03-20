const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: []
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      return {
        ...state,
        popular: action.payload.popular
      }

    case 'FETCH_UPCOMING':
      return {
        ...state,
        upcoming: action.payload.upcoming
      }

    case 'FETCH_NEW':
      return {
        ...state,
        newGames: action.payload.new
      }
    default:
      return { ...state }
  }
}

export default gamesReducer
