import { Route, Routes } from "react-router-dom";
import MenuCore from "./components/MenuCore";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <MenuCore />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/perfil" element={<h1>Perfil</h1>} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
