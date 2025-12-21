import HamburgerMenuIcon from '../icons/HamburgerMenuIcon.js';
import './HamburgerButton.css';

export default function HamburgerButton({onClick, className, toggled}) {

    let classes = "btn center btn-hamburger";
    if (className) {
        classes += " " + className;
    }
    if (toggled) {
        classes += " " + "btn-hamburger-toggled";
    }

    return (
        <button onClick={onClick} className={classes}>
            <HamburgerMenuIcon />
        </button>
    );
}