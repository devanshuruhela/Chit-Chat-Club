import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Navigation from "./Components/Shared/Navigation/navigation.component";
import Login from "./pages/Login/login";
import Authenticate from "./pages/Authenticate/authenticate";
import Activate from "./pages/Activate/activate";
import Rooms from "./pages/Rooms/rooms";


const isAuth = false;

const user= {
  activated:false
}
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        ></Route>
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();

  if (isAuth)
    return <Navigate to="/rooms" state={{ from: location }} replace />;
  else return children;
};

const SemiProtectedRoute = ({children}) => {
  const location = useLocation();

  if (!isAuth)
    return <Navigate to="/" state={{ from: location }} replace />;
  
  else if(isAuth && !user.activated)
  {
    return children;
  }
  else{
    return <Navigate to="/rooms" state={{ from: location }} replace />;
  }
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuth) return <Navigate to="/" state={{ from: location }} replace />;
  else if (isAuth && !user.activated) {
    return <Navigate to="/activate" state={{ from: location }} replace />;
  } else {
    return children
  }
};

export default App;
