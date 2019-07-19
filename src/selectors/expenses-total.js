export default (expenses) => {
    if(expenses.length === 0) {
        return 0;
    } else {
        // alternatively use reduce
        // turn an array of object to array of number
        return expenses.map((expense) => expense.amount)
            .reduce((sum, value) => {
                return sum + value
            }, 0) 
    }
}