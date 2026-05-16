import Navbar from './components/navbar/Navbar';
import Popup from './components/popups/Popup';
import Songs from './components/songs/Songs';

function App() {
  return (
    <div>
      <Popup />
      <Navbar />
      <div>
        <Songs />
      </div>
    </div>
  );
}

export default App;
