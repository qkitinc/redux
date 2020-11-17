import store from './store'
import { Provider } from 'react-redux'
import Count from './components/count'
import Control from './components/control'
function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Count />
                <Control />
            </div>

        </Provider>

    );
}

export default App;
