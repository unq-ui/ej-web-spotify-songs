import { useEffect, useState } from 'react';
import './App.css';
import songsJson from './songs.json';
import Form from './components/organisms/Form';
import NavBar from './components/organisms/NavBar'
import Button from './components/atoms/Button'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogin = () => setIsLoggedIn(true);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const onSearchChange = (e) => setSearch(e.target.value)

  useEffect(() => {
    const fetchSongs = async () => {
      if (isLoggedIn) {
        setLoading(true);
        // simular la busqueda a api
        await sleep(2000);
        setSongs(songsJson);
        setLoading(false);
      }
    }

    fetchSongs()
  }, [isLoggedIn])

  const fetchSongs = async () => {
    if (isLoggedIn && search !== '') {
      setLoading(true);
      // simular la busqueda a api
      await sleep(2000);
      setSongs(songsJson.filter(song => song.title.toLowerCase().includes(search)));
      setLoading(false);
    } else {
      setSongs(songsJson)
    }
  }

  const onSearch = () => fetchSongs()

  return (
    <>
      <NavBar search={search} onSearchChange={onSearchChange} onSearch={onSearch} />
      <div className="App">
        <h1 className="display-5 mb-5">Welcome to Spotify</h1>
        {!isLoggedIn ? (
          <Form onLogin={onLogin} />
        ) : (
          <div className="container">
            {/* <Button label="fruta" className="btn-danger"/> */}
            {loading ?
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div> : (
                <div className="row row-cols-3">
                  {songs.map(song => (
                    <div className="card song m-2 shadow-sm">
                      <img src={song.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text" data-bs-toggle="tooltip" data-bs-placement="bottom" title={song.title}>{song.title}</p>
                      </div>
                    </div>
                  ))}
                </div>)}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
