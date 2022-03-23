const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  genre: { genres: [] },
  isLoading: true
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        genre: action.payload.game,
        isLoading: false
      }

    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true
      }

    default:
      return { ...state }
  }
}

export default detailReducer
