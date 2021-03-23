import React, {useState} from 'react';
import Typography from "../../../../common/Typography";
import Icon from '../../../../common/Icon';

type IAccordionProps={
    question: string;
    answer: string;
}

function Accordion({question, answer}:IAccordionProps){
    const[selected, setSelected] = useState(false);
    return(
        <div className="border-b-2">
            <div className="w-full relative border-none focus:outline-none flex items-center justify-between" onClick={()=> setSelected(selected=>!selected)} >
                <Typography type="content" weight="semi-bold" size="16" variant="p" className="justify-between text-left flex py-4 mr-10 w-4/5">
                    {question}
                </Typography>
                <div className="min-w-10 h-10 bg-gray-100 flex justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer mr-5">
                    {
                        !selected ?
                            <Icon src={"plus-square.svg"} alt={"expand button"}/>
                            :
                            <Icon src={"minus.svg"} alt={"collapse button"}/>
                    }
                </div>
            </div>
            <div className={ !selected ? "hidden transition-all max-h-0 duration-700 " : "pb-4 mr-10"}>
                <Typography type="content" weight="regular" size="14" variant="p">
                    {answer}
                </Typography>
            </div>
        </div>
    )
}
export default Accordion
