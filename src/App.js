import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sauces from './components/sauces'

const routesConfig = [
  {
    exact: true,
    path: "/",
    component: () => <Redirect to="/sauces" />,
  },
  {
    exact: true,
    path: "/home",
    component: () => <Redirect to="/sauces" />
  },
  {
    exact: true,
    path: "/sauces",
    component:Sauces
  },
  {
    exact: true,
    path: "/sauces/:title",
    component: lazy(()=>import("./components/details")),
  },
  {
    exact: true,
    path: "/addSauce",
    component: lazy(()=>import("./components/addSauce"))
  }
]

const renderRoutes = (routes) =>
   routes ? (
      <Suspense fallback={<span>LOADING....</span>}>
        <Router>
          <Switch>
              {routes.map((route, i) => {
                const Component = route.component;

                return (
                    <Route
                      key={i}
                      path={route.path}
                      exact={route.exact}
                      render={(props) => (
                          <Component {...props} />
                      )}
                    />
                );
              })}
          </Switch>
        </Router>
      </Suspense>
   ) : null;

function App() {
  return (
    renderRoutes(routesConfig)
  );
}

export default App;
