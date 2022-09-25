import { Link } from "react-router-dom";

function NavBar() {
    const renderLoginLogout = () => {
        if (localStorage.getItem('sessionID')) {
            const handleLogout = () => {
                // TODO: jangan lupa delete session movieDBnya juga
                localStorage.removeItem('sessionID')
                window.location.href = '/'
            }
            return <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>Logout</a>
            </li>
        }
        return <li className="nav-item">
            <Link to="/login2"><a className="nav-link">Login</a></Link>
        </li>
    }
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link">Home</a></Link>
                        </li>
                        {renderLoginLogout()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;