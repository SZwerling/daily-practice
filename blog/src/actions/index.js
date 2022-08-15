import _ from 'lodash'; // not using lodash
import jsonPlaceholder from "../api/jsonPlaceholder";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    // let uniqueIds = [];
    // getState().posts.forEach(post => {
    //     if(!uniqueIds.includes(post.userId)){
    //         uniqueIds.push(post.userId)
    //     }
    // })
    const uniqueIds = [...new Set(getState().posts.map(post => post.userId))]
    uniqueIds.forEach((id) => {
        dispatch(fetchUser(id)) // this time we don't need await becuase no other function is waiting on this dispatch
    })
   
}

export const fetchPosts = () => async (dispatch, getState) => {  //don't neeed getState arg becuase we're not using it
        const response = await jsonPlaceholder.get('/posts');    // using arrow functions to get rid of brackets and return
        dispatch({ type: 'FETCH_POSTS', payload: response.data}) // pulling off just the 'data' key/value from response object
    }   
 
    
export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data})
}





// MEMOIZED VERSION OF FETCH USER TO AVOID OVER FETCHING
// THIS PREVENTS MEMOIZED FUNCTION FROM BEING CALLED MORE THAN ONCE WITH THE SAME ARGUMENTS.
// BUT THIS SOLUTION MIGHT BE BAD. IF THE DATA IN THE API CHANGES AFTER THE FUNCTION GETS CALLED
// THE FIRST TIME, IT WILL NOT RETURN THE NEW DATA.
// export const fetchUser = (id) => (dispatch) => {
//     _fetchUser(id, dispatch)
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data})
// });


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