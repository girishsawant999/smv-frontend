import React, {useState} from 'react';
import Typography from "../../../common/Typography";

type IAccordionProps={
    question: string;
    answer: string;
}

function Accordion({question, answer}:IAccordionProps){
    const[selected, setSelected] = useState(false);
    return(
        <div className="border-b-2">
            <div className="w-full relative border-none focus:outline-none flex items-center justify-between" onClick={()=> setSelected(selected=>!selected)} >
                <Typography type="headingSemiBold16px" variant="p" className="justify-between text-left flex py-4 mr-10 w-4/5">
                    {question}
                </Typography>
                <div className="w-10 h-10 bg-gray-200 flex justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer mr-5">
                    {
                        !selected ?
                            <picture>
                                <source
                                    srcSet="/assets/images/plus/plus-square.png 1x,
                                            /assets/images/plus/plus-square@2x.png 2x,
                                            /assets/images/plus/plus-square@3x.png 3x"
                                />
                                <img src="/assets/images/plus/plus-square.png" alt="Plus"/>
                            </picture>
                            :
                            <picture>
                                <source
                                    srcSet="/assets/images/minus/path.png 1x,
                                            /assets/images/plus/path@2x.png 2x,
                                            /assets/images/plus/path@3x.png 3x"
                                />
                                <img src="/assets/images/minus/path.png" alt="Minus"/>
                            </picture>
                    }

                </div>
            </div>
            <div className={ !selected ? "hidden transition-all max-h-0 duration-700 " : "pb-4 mr-10"}>
                <Typography type="contentRegular14px" variant="p">
                    {answer}
                </Typography>
            </div>
        </div>
    )
}
export default Accordion