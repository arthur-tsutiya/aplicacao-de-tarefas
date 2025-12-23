import BackIcon from '../icons/BackIcon.js';
import './BackButton.css';

export default function BackButton({onClick, className, tabIndex}) {
    let classes = "btn btn-back center";
    if (className) {
        classes += " " + className;
    }

    return (
        <button onClick={onClick} className={classes} tabIndex={tabIndex}>
            <BackIcon />
        </button>
    );
}