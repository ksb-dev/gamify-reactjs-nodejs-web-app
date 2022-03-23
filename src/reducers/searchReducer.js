const initialState = {
  searched: [],
  loading: true,
  term: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCHED':
      initialState.loading = true

      return {
        ...state,
        searched: action.payload.searched,
        term: action.payload.query,
        loading: false
      }

    default:
      return { ...state }
  }
}

export default searchReducer
