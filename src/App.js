import { Switch,Route } from 'react-router-dom'
import ComponentfileComponent from './pages/componentfile'
import ComponentfileComponent1 from './pages/componentfile2'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/componentfile' component={ComponentfileComponent} />
        <Route exact path='/' component={ComponentfileComponent1} />
      </Switch>
    </div>
  );
}

export default App;
