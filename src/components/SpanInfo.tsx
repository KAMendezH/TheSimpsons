// CSS
import './css/Span__Info.css'

// TYPES
import type { Span__InfoTypes } from "../Types/Types";

function Span__Info({ title, text }:Span__InfoTypes){
    return(
        <span className="Span__Info">
            <p className="Span__Info__title">{title}</p>
            <h3 className="Span__Info__text">{text}</h3>
        </span>
    );
};

export default Span__Info;