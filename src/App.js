import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Sauces from './components/sauces'
import Loader from './components/Loader'

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
  },
  {
    exact: true,
    path:"/loader",
    component: lazy(()=>import("./components/Loader"))
  },
  {
    path: "*",
    component: () => <Redirect to="/sauces" />
  }
]

const location = window.location


const renderRoutes = (routes) =>
   routes ? (
      <Suspense fallback={<Loader/>}>
        <Router>
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
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
          </AnimatePresence>
        </Router>
      </Suspense>
   ) : null;

function App() {
  return (
    renderRoutes(routesConfig)
  );
}

export default App;
