import BackIcon from '../icons/BackIcon.js';
import './BackButton.css';

export default function BackButton({onClick, className}) {
    let classes = "btn btn-back center";
    if (className) {
        classes += " " + className;
    }

    return (
        <button onClick={onClick} className={classes}>
            <BackIcon />
        </button>
    );
}