import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Genres from "./components/Genres";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {isLoaded && (
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        )}
        <Route path="/genres/:genreId">
          <Genres />
        </Route>
      </Switch>
    </>
  );
}

export default App;
