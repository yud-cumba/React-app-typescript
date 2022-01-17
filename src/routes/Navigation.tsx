import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>CARGANDO</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React App"></img>
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

// version 5:
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink
//   } from 'react-router-dom';

//   import logo from '../logo.svg';

//   export const Navigation = () => {
//     return (
//       <Router>
//         <div className="main-layout">
//           <nav>
//               <img src={ logo } alt="React Logo" />
//             <ul>
//               <li>
//                 <NavLink to="/" activeClassName="nav-active" exact>lazy1</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/lazy2" activeClassName="nav-active" exact>lazy2</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/lazy3" activeClassName="nav-active" exact>lazy3</NavLink>
//               </li>
//             </ul>
//           </nav>

//           {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/lazy2">
//               <h1>lazy2</h1>
//             </Route>
//             <Route path="/lazy3">
//               <h1>lazy3</h1>
//             </Route>
//             <Route path="/">
//               <h1>lazy1</h1>
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
