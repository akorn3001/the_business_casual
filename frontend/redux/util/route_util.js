import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// renders component if logged out, otherwise redirects to the root url

const Auth = ({ component: Component, path, loggedIn, currentUser }) => (
  <Route path={path} render={(props) => {
      if (!loggedIn) {
        return ( <Component {...props}/> )
      } else if (loggedIn && currentUser.admin) {
        return ( <Redirect to={"/profile"} /> )
      } else {
        return ( <Redirect to={"/articles"} />)
      }
  }}/>
);

// renders component if loggedIn AND admin user

const Admin = ({ component: Component, path, loggedIn, currentUser }) => (
  <Route path={path} render={(props) => {
      if (loggedIn && currentUser.admin) {
        return <Component {...props} />
      } else {
        return <Redirect to={"/login"} />
      }
  }} />
);

// renders component if logged in, otherwise redirects to the login page
// const Protected = ({ component: Component, path, loggedIn }) => (
//   <Route path={path} render={(props) => (
//      loggedIn ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to="/login"/>
//     )
//   )}/>
// );

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser),
          currentUser: state.session.currentUser};
}

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect Admin to the redux state
export const AdminRoute = withRouter(connect(mapStateToProps, null)(Admin));

// connect Protected to the redux state
// export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
