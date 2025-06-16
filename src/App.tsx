import { WrappedMoorhen } from './WrappedMoorhen';
import { Provider } from 'react-redux';
import { MoorhenReduxStore } from 'moorhen'

import './App.css'

function App() {
  return (
    <div className="App">
      <Provider store={MoorhenReduxStore}>
          <WrappedMoorhen/>
      </Provider>
    </div>
  );
}

export default App;
