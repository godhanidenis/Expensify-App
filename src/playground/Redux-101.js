import { createStore } from 'redux';

const IncrementCount = ({incrementby = 1} = {}) => ({
    type : "INCREMENT",
    incrementby
});

const DecrementCount = ({decrementby = 1} = {}) => ({
    type : "DECREMENT",
    decrementby
});

const ResetCount = () => ({
    type : "RESET"
});

const SetCount = ({ setby = 100 } = {}) => ({
    type : "SET",
    setby
});

var CountReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return ({
                count: state.count + action.incrementby
            });
        case "DECREMENT":
            return ({
                count: state.count - action.decrementby
            });
        case "RESET":
            return ({
                count: 0
            });
        case "SET":
            return({
                count : action.setby
            })
        default:
            return state;
    }
};

const store = createStore(CountReducer);

store.subscribe(() => {console.log(store.getState())});

store.dispatch(IncrementCount());
store.dispatch(IncrementCount({incrementby : 5}));
store.dispatch(DecrementCount());
store.dispatch(DecrementCount({decrementby : 6}));
store.dispatch(ResetCount());
store.dispatch(SetCount());
store.dispatch(SetCount({setby : 200}));

