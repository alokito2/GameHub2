import React, { useState, useEffect } from "react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Homepage/Homepage/Navbar";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading-animation">
          <PacmanLoader
            color={"#f1e702"}
            loading={loading}
            size={55}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="loader"
          />
          <p className="loader1">Welcome To GameHub!!! </p>
        </div>
      ) : (
        <div>
          <Navbar />
          <AllRoutes />
        </div>
      )}
    </div>
  );
}
export default App;
