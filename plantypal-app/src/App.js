import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import GardenList from './components/GardenList';
import GardenDetails from './components/GardenDetails';
import GardenForm from './components/GardenForm';
import PlantingSchedule from './components/PlantingSchedule';
import VegetableList from './components/VegetableList';
import VegetableDetails from './components/VegetableDetails';
import { fetchVegetables } from './redux/actions/vegetableActions'; // Import fetchVegetables action

// Create Redux store with middleware (thunk for async actions)
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  // Fetch vegetables data when App component mounts
  React.useEffect(() => {
    store.dispatch(fetchVegetables());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={GardenList} />
            <Route path="/garden/:id" component={GardenDetails} />
            <Route path="/create-garden" component={GardenForm} />
            <Route path="/planting-schedule/:id" component={PlantingSchedule} />
            <Route exact path="/vegetables" component={VegetableList} />
            <Route path="/vegetables/:id" component={VegetableDetails} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
