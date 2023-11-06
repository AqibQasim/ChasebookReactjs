import React from 'react';
// import Profile from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter(
    [
      {path : '/' , element : <Home />},
      {path : '/timeline' , element : <Profile />},
      {path : '/login' , element : <Login />},
      {path : '/register' , element : <Register />}
    ]
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
