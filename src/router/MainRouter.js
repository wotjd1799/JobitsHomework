import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pagination from "./../components/Pagination";
import InfinityScroll from "./../components/InfinityScroll"

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pagination} />
      <Route exact path="/infinity-scroll" component={InfinityScroll} />
    </Switch>
  );
};

export default MainRouter;