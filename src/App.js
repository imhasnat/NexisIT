import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUpForm/SignUp';
import TableDatas from './Pages/TableData/TableDatas';
import { ToastContainer } from 'react-toastify';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp></SignUp>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/table',
      element: <TableDatas></TableDatas>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
