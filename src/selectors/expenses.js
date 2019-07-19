import moment from 'moment';

// Get Visible expenses, destructuring the filters object
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        // timestamps.  Just number!(in millisecons) - where is the spot Jan 1st, 1970 (unix epoch).
        // + are come afterward, - before!
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
        // just for description!
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if(sortBy === 'amount') {  // sort with highest item first!
            return a.amount < b.amount ? 1: -1;
        }
    })
}

export default getVisibleExpenses;