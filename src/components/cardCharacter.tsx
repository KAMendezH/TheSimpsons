// CSS
import './css/cardCharacter.css'

// TYPES    
import type{ Character } from "../Types/Types";

// STORES
import useModalStore from '../stores/useModalStore';


function CardCharacter({portrait_path, name, age, occupation, phrases, status, gender, id, birthdate}: Character){
    const { modalActive, setData } = useModalStore();
     const url = `https://cdn.thesimpsonsapi.com/500${portrait_path}`;
    const DataModal = {
        id: id,
        name: name,
        occupation: occupation,
        phrases: phrases,
        age: age ?? "unknown",
        status: status,
        gender: gender,
        birthdate: birthdate ?? "unknown",
        img: url
    }
   
    return(
        <section className='Card__container' onClick={()=>{setData(DataModal); modalActive();}}>
            <div className='Card__container__id'>
                    <span className='Card__id'><p>{id}</p></span>
            </div>
            <div className='Card__container__img'>
                <img className='Card__img' src={url} alt={`Imagen de ${name}`} />
            </div>
            <div className='Card__container__info'>
                
                <span className='Card__span__container'>
                    <p className='Card__p'>name:</p>
                    <h1 className='Card__name'>{name}</h1>
                </span>
                <span className='Card__span__container'>
                    <p className='Card__p'>age:</p>
                    <h5 className='Card__h5'>{age ? age : "unknown"}</h5>
                </span>
                <span className='Card__span__container'>
                    <p className='Card__p'>occupation:</p>
                    <h5 className='Card__h5'>{occupation}</h5>
                </span>
                {/* {
                    phrases.map(p => (
                        <p>{p}</p>
                    ))
                } */}
                {/* <span className={`${status === "Alive" ? "Card__status__alive" : "Card__status__deceased"}`}>{status}</span> */}
                {/* <h4>{gender}</h4> */}
                {/* <h4>{birthdate}</h4> */}
            </div>
        </section>
    );
};

export default CardCharacter;