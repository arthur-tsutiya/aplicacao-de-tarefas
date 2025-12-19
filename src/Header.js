import { Link } from 'react-router-dom';
import PageLogo from './components/icons/PageLogo.js';
import './Header.css';

export default function Header() {

    return (
        <header className="page-header">
            <Link to="/" className="page-header-logo-link">
                <PageLogo className="page-header-logo"/>
            </Link>
            <nav className="page-nav">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="tasks">Tasks</Link></li>
                </ul>
            </nav>
        </header>
    );
}