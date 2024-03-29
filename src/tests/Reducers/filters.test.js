import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };

    const state = filtersReducer(currentState, { type: 'SET_TEXT_FILTER', text: 'bill'});
    expect(state.text).toBe('bill');
})

test('should set start Date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };

    const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: moment(0).add(2,'days').valueOf()});
    expect(state.startDate).toBe(moment(0).add(2,'days').valueOf());
})

test('should set end Date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    };

    const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: moment(0).add(2,'days').valueOf()});
    expect(state.endDate).toBe(moment(0).add(2,'days').valueOf());
})