import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));

const App = () => (
  <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies&" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
