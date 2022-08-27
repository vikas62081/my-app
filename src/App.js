import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState(600071);
  const [postOffices, setPostOffices] = useState([]);

  useEffect(() => {
    const getPostOffices = setTimeout(() => {
      fetch(`https://api.postalpincode.in/pincode/${search}`)
        .then((resp) => resp.json())
        .then((resp) => setPostOffices(resp[0]?.PostOffice));
    }, 3000);
    return () => clearTimeout(getPostOffices);
  }, [search]);

  return (
    <div className="App">
      <h3>React-App</h3>
      <p>Debouncing in React - How to delay a JS function</p>
      Search:{" "}
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {postOffices ? (
        postOffices?.map((post, index) => <div key={index}>{post.Name}</div>)
      ) : (
        <p>Invalid Pincode, Please enter a valid one!</p>
      )}
    </div>
  );
}

export default App;
