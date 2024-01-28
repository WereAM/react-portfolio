import '../App.css';

export default function Header() {
    return(
        <>
        <header className="header">
            <a href="#home" className="logo">Michelle's Portfolio</a>

            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#projects">Projects</a>
                <a href="#connect">Connect</a>
            </nav>
        </header>
        </>
    );
}