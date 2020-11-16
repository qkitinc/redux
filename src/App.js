import store from './store'
import { Provider } from 'react-redux'
import Count from './components/count'
function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Count />
            </div>

        </Provider>

    );
}

export default App;
