import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Home/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import ManageService from "./Pages/ManageService/ManageService";
import UpdateService from "./Pages/UpdateService/UpdateService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addService">
              <AddService />
            </Route>
            <Route path="/services/updateService/:id">
              <UpdateService/>
            </Route>
            <Route path="/manageService">
              <ManageService />
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
