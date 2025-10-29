// CSS
import './css/Modal.css'

// ICONS
import { IoIosExit } from "react-icons/io";

// ELEMENTS
import Line from "../elements/Line";

// COMPONENTS
import Span__Info from "./SpanInfo";

// STORES
import useModalStore from '../stores/useModalStore';


function Modal(){
    const { statusModal, dataModal, modalHidden } = useModalStore();
    return(
        <section className={`Modal__backgound  ${statusModal ? "Modal__backgound--active" : ""}`}>
            <div className="Modal__container">
                <div className='Modal__options'>
                    <span className='Options__id'>{dataModal.id}</span>
                    <span className='Span__exit' onClick={modalHidden}><IoIosExit className='Exit__icon' /><p className='Exit__p'>Salir</p></span>
                </div>
                <div>
                    <div>
                        <img className='Modal__img' src={dataModal.img} alt={`Foto de ${dataModal.name}`} />
                    </div>
                    <h1 className='Modal__name'>{dataModal.name}</h1>
                </div>
                <fieldset className='Modal__fieldset'>
                    <legend className='Modal__legend'>Info:</legend>
                    <Span__Info title="age: " text={dataModal.age ? dataModal.age :  "unknown"}/>
                    <Span__Info title="occupation: " text={dataModal.occupation}/>
                    <Span__Info title="status: " text={dataModal.status}/>
                    <Span__Info title="gender: " text={dataModal.gender}/>
                    <Span__Info title="birthdate: " text={dataModal.birthdate ? dataModal.birthdate : "unknown"}/>
                    <Line color='#b1b1b1ff'/>
                    <h3 className='Modal__h3'>Phrases: </h3>
                    <ul>
                        {
                            dataModal.phrases.map(p =>(
                                <li className='Modal__li'>{p}</li>
                            ))
                        }
                    </ul>
                    
                </fieldset>
            </div>
        </section>
    );
};

export default Modal;