import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import classes from './App.module.css';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);


  return (
    <Router>
    <div className={classes.mainContent} style={{ marginLeft: (open ? '240px' : '60px') }}>
      <Sidebar open={open} setOpen={setOpen} />
      <Switch>
        <Route exact path={["/", "home"]}>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
