import data from '../apis/data'


export const fetchPuzzle = () => async(dispatch, getState) => {
    const response = await data.get('')
    dispatch({ type: "FETCH_DATA", payload: response.data })
}


// export const fetchPosts = () => async (dispatch, getState) => {  //don't neeed getState arg becuase we're not using it
//     const response = await jsonPlaceholder.get('/posts');    // using arrow functions to get rid of brackets and return
//     dispatch({ type: 'FETCH_POSTS', payload: response.data}) // pulling off just the 'data' key/value from response object
// }   