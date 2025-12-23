import Footer from '../components/Footer.js';
import './Home.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../contexts/MediaQueryProvider.js';

export default function Home() {
    const mediaQuery = useMediaQuery();
    
    return (
        <>
            <main className="main-page home-page container">
                <section className="hero-section">
                    <div className="hero-section-text">
                        <h1 className="hero-main-heading hero-heading">Welcome to Tasks!</h1>
                        <h2 className="hero-subheading hero-heading">The best place to manage and keep track of your day-to-day tasks.</h2>
                        <p className="hero-text">
                            To start, click {' '}
                            <Link className="hero-text-link" to="/tasks">here</Link>
                        </p>
                    </div>
                    {mediaQuery !== "mobile" && <div className="hero-section-image center">
                        hero image placeholder
                    </div>}
                </section>
                <section>
                    <p className="author-note" style={{textAlign: "center", marginBlock: "10em"}}>Page still under construction!</p>
                </section>
            </main>
            <Footer/>
        </>
    );
}