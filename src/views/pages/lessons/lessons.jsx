import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import LessonsPage from './LessonsPage'; // Adjust the path as per your file structure

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route path="/pages/lessons-page" component={LessonsPage} />
          {/* Other routes */}
        </Switch>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
