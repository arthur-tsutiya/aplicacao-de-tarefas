import { useState } from 'react';

export default function TextInputStaggered({name, className, expanded, onChange, validationPredicate, value, ...rest}) {
    const [text, setText] = useState(value);

    if (validationPredicate(text) && value !== text) {
        setText(value);
    }

    if (!expanded && text !== value) {
        setText(value);
    }
 
    function inputUpdate(newValue) {
        setText(newValue);

        if (validationPredicate(newValue)) {
            onChange(newValue);
        }
    }

    let classes = "text-input";
    if (className) {
        classes = classes + " " + className;
    }

    return (
        <input className={classes} name={name} type="text" value={text} onChange={(e) => inputUpdate(e.target.value)}
         tabIndex={expanded ? 0 : -1} {...rest}/>
    );
}