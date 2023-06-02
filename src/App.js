import "./App.css";
import VideoPlayer from "./VideoPlayer";

function App() {
  const link = "https://www.youtube.com/watch?v=H5o7h9DaVIg";

  return (
    <div className="App">
      <h2>YouTube video player in React</h2>
      <VideoPlayer link={link} />

      {/* <VideoPlayer
        link={link}
        width={300}
        height={150}
        allowFullScreen={true}
        style={{ borderRadius: 5, border: "1px black solid" }}
      /> */}
    </div>
  );
}

export default App;
