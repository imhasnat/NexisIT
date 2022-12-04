import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUpForm/SignUp';
import TableDatas from './Pages/TableData/TableDatas';
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignUp></SignUp>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/login',
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/table',
      element: <TableDatas></TableDatas>,
      errorElement: <ErrorPage></ErrorPage>
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
