import {useState, useRef, useContext, useEffect, createContext} from 'react';

const MediaQueryContext = createContext(null);

export function MediaQueryProvider({children}) {
    const [mediaQuery, setMediaQuery] = useState("tablet");
    const mediaQueryRef = useRef(null);

    function changeMediaQuery() {
        

        if (mediaQueryRef.current.matches) {
            setMediaQuery("tablet");
        } else {
            setMediaQuery("mobile");
        }
    }

    useEffect(() => {
        if (!mediaQueryRef.current) {
            mediaQueryRef.current = window.matchMedia("(min-width: 45em)");
        }

        // Initial setting of the correct styles.
        changeMediaQuery();


        mediaQueryRef.current.addEventListener("change", changeMediaQuery);

        return () => mediaQueryRef.current.removeEventListener("change", changeMediaQuery);
    }, []);


    return (
        <MediaQueryContext value={mediaQuery}>
            {children}
        </MediaQueryContext>
    );
}

export function useMediaQuery() {
    return useContext(MediaQueryContext);
}