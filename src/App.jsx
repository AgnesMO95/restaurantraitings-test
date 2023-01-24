import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [resturants, setRestaurants] = useState();
  const fetchData = () => {
    fetch(
      "https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?poststed=trondheim"
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.entries));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {resturants &&
        resturants.map((restaurant, index) => (
          <div key={index}>
            <h1>{restaurant.navn}</h1>
            <h3>{restaurant.total_karakter}</h3>
          </div>
        ))}
    </div>
  );
}

export default App;
