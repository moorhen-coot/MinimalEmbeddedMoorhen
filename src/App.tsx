import { WrappedMoorhen } from './WrappedMoorhen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MoorhenContainer, MoorhenMolecule, MoorhenMap, addMolecule, addMap, setActiveMap, MoorhenReduxStore } from 'moorhen'

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
