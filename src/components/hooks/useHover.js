import {useRef, useEffect, useState} from "react";


export function useHover () {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false)
    useEffect(() => {
        ref.current.onmouseenter = function () {
            setHovered(true)
        }

        ref.current.onmouseleave = function () {
            setHovered(false)
        }

    }, []);

    return {ref, hovered}
}