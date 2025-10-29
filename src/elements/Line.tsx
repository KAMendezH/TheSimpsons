// CSS
import './css/Line.css'
// TYPES
import type { LineTypes } from '../Types/Types';

function Line({color}: LineTypes){
    return(
        <div className='Line' style={{backgroundColor: color}}></div>
    );
};

export default Line;