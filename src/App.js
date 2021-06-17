import { Route, Switch } from "react-router";

import Profile from "./pages/profile";
import AuthPage from "./pages/auth";
import Users from "./pages/users";
import Resource from "./pages/resource";
import Theme from "./components/theme";


import Navigation from "./components/navigation";


;


function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
        <Switch>
          <Route path="/profile">
            <Profile title="Protected Page" />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>


          <Route path="/users">
            <Users />
          </Route>
          
          <Route path="/resource">
            <Resource />
          </Route>
        
          <Route path="/">
            <AuthPage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
