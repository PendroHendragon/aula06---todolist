export default function Navbar(){



    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="navigation bar">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">My To-do list App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="Mynav" aria-controls="Mynav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="Mynav">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}