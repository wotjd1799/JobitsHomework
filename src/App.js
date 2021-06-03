import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import SideBar from './components/SideBar'
import Pagination from "./components/Pagination";
import InfinityScroll from "./components/InfinityScroll"
import { useEffect } from 'react';

const First = () => {
  const history = useHistory();
  useEffect(() => history.push("/pagination/1")); 
  return (<></>)
}

function App() {
  return (
    <>
      <Router>
        <SideBar paginationButtonColor={true}></SideBar>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/pagination/:id" component={Pagination} />
          <Route exact path="/infinity-scroll" component={InfinityScroll} />
        </Switch>
      </Router>
    </>
  );
}

export default App;