import _ from 'lodash';
import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch, getState) => {  //don't neeed getState arg becuase we're not using it
        const response = await jsonPlaceholder.get('/posts');    // using arrow functions to get rid of brackets and return
        dispatch({ type: 'FETCH_POSTS', payload: response.data}) // pulling off just the 'data' key/value from response object
    }   
    
export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
});




// FUNCTION BEFORE MEMOIZE // MEMOIZE MEANS THAT IF THE SAME FUNCTION IS CALLED WITH SAME INPUTS, 
// IT ACTUALLY WILL NOT RUN AGAIN, JUST RETURN SAME OUTPUT, THANKS TO LODASH LIBRARY // NO OVERFETCHING
// export const fetchUser = (id) => (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data})
// }

//CANNOT DO THIS  // THE REASON FOR THUNK MIDDLEWARE
// Because what gets returned is not a pure js object.
// What actually gets returned is the response from jsonPlaceholder.get.
// And in the time action gets to a reducer, we won't have fetched our data.

// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: `FETCH_POSTS`,
//         payload: response
//     };
// };