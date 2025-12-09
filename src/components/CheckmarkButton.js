import './CheckmarkButton.css';

export default function CheckmarkButton({ onClick, checked }) {

    let className = "checkmark-btn center";

    if (checked) {
        className += " checked";
    }
    
    return (
        <button className={className} onClick={onClick}>
            <svg
            viewBox="0 0 72 51"
            xmlns="http://www.w3.org/2000/svg">
                <path className="checkmark"
                d="M 63.381635,0 C 62.475899,-7.071057e-7 61.569798,0.34699356 60.875776,1.0410153 L 29.326948,32.589843 10.432416,13.697265 c -1.3109298,-1.31093 -3.4214911,-1.31093 -4.7324211,0 l -4.71679677,4.716797 c -1.31093072,1.310931 -1.31093072,3.421492 -7.1e-7,4.732422 l 21.40039058,21.398437 4.437501,4.437501 0.138671,0.138671 c 1.31093,1.31093 3.421492,1.310931 4.732422,0 L 31.813276,49 36.408979,44.406249 70.324995,10.490234 c 1.388043,-1.3880437 1.388043,-3.6236749 0,-5.0117184 L 65.887494,1.0410153 C 65.193473,0.34699356 64.287371,0 63.381635,0 Z" />
            </svg>
        </button>
    );
}