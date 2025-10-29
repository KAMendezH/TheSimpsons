export interface Character{
    id: number,
    age: number | null,
    birthdate: string | null,
    gender: string,
    name: string,
    occupation: string,
    phrases: string[],
    portrait_path: string,
    status: string
}

export interface Span__InfoTypes{
    title: string,
    text: string | number 
}
interface ObjectCharacter{
    id: number,
    name: string,
    occupation: string,
    phrases: string[],
    age: number | "unknown" | string,
    status: string,
    gender: string,
    birthdate: string | "unknown",
    img: string
}

export interface ModalTypes{
    statusModal: boolean,
    modalActive: () => void,
    modalHidden: () => void,
    dataModal: ObjectCharacter,
    setData: (data: Partial<ObjectCharacter>) => void;   //Partial toma un tipo T y hace todas sus propiedades opcionales.
}
export interface LineTypes{
    color: string
}
// Partial
// Es equivalente a:
// {
//   id?: number;
//   nombre?: string;
//   email?: string;
// }

// Cuando usas Partial<ModalData> en setData, le dices a TypeScript:

// "Esta función puede recibir un objeto con cualquiera o ninguna de las propiedades de ModalData".

// Así puedes hacer:
// setData({ name: "Juan" }); // ✅ Válido, aunque no pases las demás propiedades   
// Y al combinarlo con el spread ({ ...state.dataModal, ...data }), JavaScript se encarga de mantener las propiedades existentes y solo sobrescribir las proporcionadas.

