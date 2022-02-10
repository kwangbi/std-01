import { useReducer } from "react"

const initialState = { count: 0 }

// action함수

// action 타입

// reducer
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count = 1 };
        default:
            throw new Error();
    }
}



const useReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count : {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })} > 줄이기 </button>
            <button onClick={() => dispatch({ type: 'increment' })} > 늘리기 </button>
        </div>
    )
}




export default useReducerPage