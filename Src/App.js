import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./Navigation/Navigation";
import NavFooter from "./Navigation/NavFooter";
import Home from "./Home";
import Contact from "./Contact";
import Rooms from "./Rooms/Rooms";
import RoomDetail from "./Rooms/RoomDetail";
import Details from "./Rooms/Details";

function App(props) {
  return (
    <div className="container-fluid">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/room/:slug" component={Details} />
        <Route path="/room" component={RoomDetail} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <NavFooter/>
    </div>
  );
}

export default App;
