import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Adduser from "./Pages/Add/Adduser";
import Views from "./Pages/View/Views";
// import { useState } from "react";

function App() {
  // const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Adduser />} />
        <Route path="/user" element={<Adduser />} />
        <Route path="/view_user" element={<Views />} />
      </Routes>

      {/* <Navbar user={user} setUser={setUser}/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/user" element={user ? <Adduser /> : <Home />} />
  <Route path="/view_user" element={user ? <Views /> : <Home />} />
</Routes> */}
    </div>
  );
}

export default App;
