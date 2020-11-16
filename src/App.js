
import { createStore } from 'redux'

function App() {

    // state, action parameter
    const reducer = (state = {}, action) => {

        if (action.type === 'A') {
            return {
                ...state,
                A: 'I am A'
            }
        }
        if (action.type === 'B') {
            return {
                ...state,
                B: 'I am B'
            }
        }
        return state
    }

    const store = createStore(reducer)


    store.subscribe(() => {
        console.log(store.getState().A);
    })
    store.subscribe(() => {
        console.log(store.getState().B);
    })

    store.dispatch({ type: 'B' })
    store.dispatch({ type: 'Something' })
    store.dispatch({ type: 'A' })
    store.dispatch({ type: 'Something' })



    return (
        <div className="App">
            <h1>This is App</h1>
        </div>
    );
}

export default App;
