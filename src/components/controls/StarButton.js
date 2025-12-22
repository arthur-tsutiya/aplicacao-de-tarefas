import StarIcon from '../icons/StarIcon.js';
import './StarButton.css';

export default function StarButton({ onClick, toggled, tabIndex}) {

    let className = "btn btn-star center";
    if (toggled) {
        className += " btn-star-toggled";
    }

    return (
        <button className={className} onClick={onClick} tabIndex={tabIndex}>
            <StarIcon className="btn-star-svg center" />
        </button>
    );
}