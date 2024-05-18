import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsPage from "./pages/NewsPage";
import "./App.css";
import CreateNews from "./pages/CreateNews";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route element={<ProtectedRoutes />}>
          <Route path="/food" element={<FoodCopy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Route> */}
        <Route path="/news" element={<NewsPage />} />
        <Route path="/create" element={<CreateNews />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
