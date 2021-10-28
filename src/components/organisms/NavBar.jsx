import Button from '../atoms/Button'

const NavBar = ({ search, onSearchChange, onSearch }) => {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Spotify</a>
        <form className="d-flex">
          <input value={search} onChange={onSearchChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <Button label="Search" className="btn-primary" onClick={onSearch} />
        </form>
      </div>
    </nav>
  )
}

export default NavBar;