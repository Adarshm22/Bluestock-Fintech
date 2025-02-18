import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginForm from './components/AdminSidePages/Forms/Login';
import SignUpForm from './components/AdminSidePages/Forms/SignUp'
import ForgotPassword from './components/AdminSidePages/Forms/ForgotPassword';
import IpoForm from './components/AdminSidePages/Forms/RegisterIpo';
import UpcomingIpoDashboard from './components/AdminSidePages/IpoPages/UpcomingIpo';
import QuickLinks from './components/AdminSidePages/IpoPages/Dashboard';
import Container from './components/UserSidePages/Container';
import DashboardLayout from './components/AdminSidePages/DashboardContainer';
import UpdateIPO from './components/AdminSidePages/IpoPages/UpdateIpo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Container />} />
      <Route path='/signUp' element={<SignUpForm />} />
      <Route path='/signIn' element={<LoginForm />} />
      <Route path='/forgotPassword' element={<ForgotPassword/>} />

      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='/dashboard/' element={<QuickLinks />} />
        <Route path='/dashboard/manage-ipo' element={<UpcomingIpoDashboard />} />
        <Route path='/dashboard/manage-ipo/register-ipo' element={<IpoForm />} />
        <Route path='/dashboard/manage-ipo/:id/update-ipo' element={<UpdateIPO/>} />
      </Route>

    </>
  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
