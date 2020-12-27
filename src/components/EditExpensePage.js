import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { updateExpense, deleteExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(updateExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                console.log("props.expense.id ::", props.expense.id);
                props.dispatch(deleteExpense({ id : props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
    };
};

export default connect(mapStateToProps)(EditExpensePage);