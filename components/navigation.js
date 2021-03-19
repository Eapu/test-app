import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand" href="#">home</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/organizations">
                            <a className="nav-link">organizations</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/services">
                            <a className="nav-link">services</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
