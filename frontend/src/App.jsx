import './App.css'
import LoginPage from './Pages/LoginScreen'
import LoginSignupScreen from './Pages/LoginSignupScreen'
import { Route,Routes } from 'react-router-dom'
import SignupPage from './Pages/SignUpScreen'
import ForgotPasswordPage from './Pages/ForgotPassword'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignupScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage/>} />
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
