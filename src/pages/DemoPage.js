import {useHover} from "../components/hooks/useHover";

function DemoPage() {
    const {ref, hovered} = useHover();

    return (
        <div ref={ref}>
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}

export default DemoPage;