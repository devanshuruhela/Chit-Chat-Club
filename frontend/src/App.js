import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/home";
import Navigation from "./Components/Shared/Navigation/navigation.component";
import Authenticate from "./pages/Authenticate/authenticate";
import Activate from "./pages/Activate/activate";
import Rooms from "./pages/Rooms/rooms";
import { useSelector } from "react-redux";
import { useLoadingRefresh } from "./Hooks/useLoadingRefresh";
import Loader from "./Components/Shared/Loader/loader";
import RoomPage from "./pages/Roompage/roompage";

function App() {
  const {loading}  = useLoadingRefresh()
  return loading ? (
    <Loader message="Loading, please wait..." />
  ) : (
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
        <Route
          path="/room/:id"
          element={
            <ProtectedRoute>
              <RoomPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();

  const {isAuth } = useSelector((state)=>state.auth)

  if (isAuth)
    return <Navigate to="/rooms" state={{ from: location }} replace />;
  else return children;
};

const SemiProtectedRoute = ({children}) => {
  const location = useLocation();
   const { isAuth , user} = useSelector((state) => state.auth);
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
   const { isAuth, user } = useSelector((state) => state.auth);

  if (!isAuth) return <Navigate to="/" state={{ from: location }} replace />;
  else if (isAuth && !user.activated) {
    return <Navigate to="/activate" state={{ from: location }} replace />;
  } else {
    return children
  }
};

export default App;
