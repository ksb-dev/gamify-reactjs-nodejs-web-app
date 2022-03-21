const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  loading: true
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR':
      initialState.loading = true

      return {
        ...state,
        popular: action.payload.popular,
        loading: false
      }

    case 'FETCH_UPCOMING':
      initialState.loading = true

      return {
        ...state,
        upcoming: action.payload.upcoming,
        loading: false
      }

    case 'FETCH_NEW':
      initialState.loading = true

      return {
        ...state,
        newGames: action.payload.new,
        loading: false
      }

    case 'FETCH_SEARCHED':
      initialState.loading = true

      return {
        ...state,
        searched: action.payload.new,
        loading: false
      }
    default:
      return { ...state }
  }
}

export default gamesReducer
