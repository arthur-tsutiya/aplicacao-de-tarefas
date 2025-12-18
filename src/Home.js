export default function Home({ footerDisplay, setFooterDisplay }) {
    
    if (!footerDisplay) {
        setFooterDisplay(true);
    }

    return (
        <main className="main-page container">
            <p>Home page (in construction)</p>
        </main>
    );
}