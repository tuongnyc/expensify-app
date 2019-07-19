import moment from 'moment';

// will be created with store!

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'), // current intime!//undefined,
    endDate: moment().endOf('month') //undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            //return {...state, ...action};  // return an object where the action 
            //will overide the element of the state!  But does not change the state!
            return {...state, text: action.text}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate}
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount'}
            //return {...state, ...action}
        default:
            return state;
    }
};

export default filtersReducer;