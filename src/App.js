import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Debounce } from './pages/debounce/Debounce';
import { Throttle } from './pages/throttle/Throttle';
// import Home from './pages/home/Home'
// import User from './pages/user/User'
// import NotFound from './pages/NotFound'
// import UserDetails from './pages/userDetails/UserDetails';
// import SigninForm from './pages/signinForm/SigninForm';

const Home = React.lazy(() => import('./pages/home/Home'))
const User = React.lazy(() => import('./pages/user/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const UserDetails = React.lazy(() => import('./pages/userDetails/UserDetails'))
const SigninForm = React.lazy(() => import('./pages/signinForm/SigninForm'))

export const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // user is not authenticated
    return <div>Not having Access</div>;
  }
  return children;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div>Loading</div>} >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<ProtectedRoute isAuthenticated={true} ><User /></ProtectedRoute>} />
          <Route path="/user/:userId" element={<UserDetails />}  /> 
          <Route path='/signin' element={<SigninForm/>}/>
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
      Debounce - <Debounce />
      Throttle - <Throttle />
    </div>
  );
}

export default App;
