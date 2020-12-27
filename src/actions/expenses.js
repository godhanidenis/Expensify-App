function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const addExpense = (
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

export const deleteExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

export const updateExpense = (id, updates) => ({
    type: "UPDATE_EXPENSE",
    id,
    updates
});