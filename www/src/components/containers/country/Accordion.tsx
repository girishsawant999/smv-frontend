import React, {useState} from 'react';

type IAccordionProps={
    question: string;
    answer: string;
}

function Accordion({question, answer}:IAccordionProps){
    const[selected, setSelected] = useState(0);
    return(
        <div className="border-b-2">
            <button className="w-full relative border-none focus:outline-none" onClick={()=> selected !== 1 ? setSelected(1) : setSelected(0)} >
                <p className="section-subheading justify-between text-left flex py-4 ">
                    {question}
                </p>
            </button>

            <div className={selected == 0 ? "hidden transition-all max-h-0 duration-700 " : "pb-4 mr-10"}>
                <div className={"section-description"}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
export default Accordion