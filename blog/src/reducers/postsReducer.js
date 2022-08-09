export default (state = [], action) => {
    if(action.type === `FETCH_POSTS`){
        return action.payload;
    }
    return state;
};



// reducer cannot return undefined
// produces 'state' or data using only previous data and the action
// cannot reach out of itself to return data // no api req's
// must not mutate its input state arg // no state.examp = "new thing" // or push, pop


//  REMOVING an element from arr ---  state.filter(element => element !== "hi")
//  ADDING an element to an arr --- [...state, 'hi']
//  REPLACING an element in an arr --- state.map(element => element === "hi"? "bye" : element)
// make new arr

// OBJECTS
// UPDATING property in an object --- {...state, name: "Sam"}
// ADDING property to an object ---   {...state, age: 30}
// REMOVING property from an object --- {...state, age: undedfined} // _.omit(state, 'age')
// make new object