import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from './01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React App"></img>
          <ul>
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                lazy1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                lazy2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                lazy3
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
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
