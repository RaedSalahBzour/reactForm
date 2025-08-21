import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./components/login/Login";
import Form from "./components/Signup/Form";
import Layout from "./components/Layout/Layout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Form />} />
      </Route>
    )
  );
  return (
    <div style={{ height: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
