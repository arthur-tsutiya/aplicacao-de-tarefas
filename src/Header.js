import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {

    return (
        <header className="page-header">
            <Link to="/"><h1 className="page-heading">Tasks</h1></Link>
            <nav className="page-nav">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="tasks">Tasks</Link></li>
                </ul>
            </nav>
        </header>
    );
}