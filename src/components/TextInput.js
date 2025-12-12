import './TextInput.css';

export default function TextInput({name, className, expanded, title, setTitle, ...rest}) {
    let classes = "text-input";
    if (className) {
        classes = classes + " " + className;
    }

    return (
        <input className={classes} name={name} type="text" value={title} onChange={e => setTitle(e.target.value)}
         tabIndex={expanded ? 0 : -1} {...rest}/>
    );
}