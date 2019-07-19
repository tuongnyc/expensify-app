import { createStore } from 'redux';

// destructuring the object.
const add = ({a, b}) => {

    return a + b;
}

console.log(add({a: 1, b: 12}));

// action generation! Function.  Set up a default value
const incrementCount = ({ incrementBy = 1} = {}) => {
    // return an action obect
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

// action generator for decrement!
const decrementCount = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const setCount = ({count = 0} = {}) => {
    return {
        type: 'SET',
        count: count
    }
}

// current state, similar to this.setState((prevState) => ({}))
// set the state default
// the function argument is the function reducer!!  Reducer determine what to do with an action.

// reducers:  
// 1. reducers are pure functions -- the output depends only the function argument!
// 2. Never change state or action!  Returning an object with the new state!!

const countReducer = (state = { count: 0 }, action) => {
    console.log('running');
    switch(action.type) {
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy//1 // not changing the state!
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy //decrementBy//1
            }
        case 'SET':
            return {
                //count: action.count
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

// store.subscribe get invoke anytime when the state changes!
const unsubscribe = store.subscribe(() => {
    console.log('subscribe', store.getState());
})


console.log(store.getState());  // return current state object

// actions - is an object that gets sent to the store!
// increment, decrement, reset -> changing the store that dispatch the action.
// convention in Redux that action name are in CAPS.  if two words, separated by _.
// could have any property, but type must exist!
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

console.log(store.getState()); */

// now unsubscribe
//unsubscribe();  // all the other actions will be ignored!

// each dispatch will be running the function passed in createStore!
/*store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

console.log(store.getState()); */

/*
store.dispatch({
    type: 'RESET'
}); */

store.dispatch(resetCount());  // reset to zero
console.log('resetCount', store.getState());

// each dispatch will be running the function passed in createStore!
/*store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState()); */
/*
store.dispatch({
    type: 'SET',
    count: 101
}) */

store.dispatch(setCount({ count: 10}));
console.log('setCount', store.getState());

// invoking action generation function
store.dispatch(incrementCount());
console.log('increment Count', store.getState());
store.dispatch(incrementCount({ incrementBy: 5}));  // custom set up bo incrementBy
console.log('increment Count by 5', store.getState());

store.dispatch(setCount());  // should automatically set to zero, if no argument!
store.dispatch(decrementCount());
console.log(store.getState());
store.dispatch(decrementCount({ decrementBy: 2}))
console.log(store.getState());


