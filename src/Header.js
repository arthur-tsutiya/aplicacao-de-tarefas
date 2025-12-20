import { Link } from 'react-router-dom';
import PageLogo from './components/icons/PageLogo.js';
import './Header.css';

export default function Header() {

    return (
        <header className="page-header">
            <Link to="/" className="page-header-logo-link" aria-label="Home page">
                <PageLogo className="page-header-logo"/>
            </Link>
            <nav className="page-nav">
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link className="btn btn-my-tasks" to="tasks">
                            My Tasks
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}