import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Coupon from "./pages/Coupon";
import Password from "./pages/Password";
import Wordle from "./pages/Wordle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<div><Login /></div>}/>
          <Route path="/password" element={<Password/>}/>
          <Route path="/human" element={<Wordle/>}/>
          <Route path="/coupon" element={<Coupon/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
