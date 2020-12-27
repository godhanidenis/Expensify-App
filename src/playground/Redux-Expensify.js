import { createStore, combineReducers } from 'redux';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

const demoState = {
    expenses: [
        {
            id: 'poijasdfhwer',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

const expensesReducerDefaultState = [];

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: guidGenerator(),
            description,
            note,
            amount,
            createdAt
        }
    });

const deleteExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

const updateExpense = (id, { amount } = {}) => ({
    type: "UPDATE_EXPENSE",
    id,
    amount
});

const setTextFilter = (text = '') => ({
    type: "SET_TEXT_FILTER",
    text
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
});

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
});

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case "ADD_EXPENSE":
            // return state.concat(action.expense);
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "UPDATE_EXPENSE":
            return state.map((expense) => {
                if (expense.id == action.id) {
                    expense.amount = action.amount
                    return expense;
                }
                else {
                    return expense;
                }
            })
        default:
            return state
    }
};

const filterReducerDefaultState = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}


const filterReducer = (state = filterReducerDefaultState, action) => {

    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: 'amount'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = {}) => {
    
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === "amount"){
            return a.amount > b.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 100,
    createdAt : 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt : -1000
}));

// const removeExpenseOne = store.dispatch(deleteExpense({ id: expenseOne.expense.id }));

// const updateExpenseTwo = store.dispatch(updateExpense(expenseTwo.expense.id, { amount: 600 }))

//store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));

// const user = {
//     name: "Denis",
//     surname: "Godhani",
//     age: 21
// }

// console.log({
//     ...user,
//     location: "Surat",
//     age: 23
// });