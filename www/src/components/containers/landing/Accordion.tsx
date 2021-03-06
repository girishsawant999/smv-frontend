import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';

Accordion.prototype={
  question: PropTypes.string,
  answer: PropTypes.string
}

function Accordion({question, answer}){
    const[selected, setSelected] = useState(true);
    return(
        <div className="border-b-2">
            <button className="w-full relative border-none focus:outline-none" onClick={()=> setSelected(selected =>!selected)} >
                <p className="section-subheading justify-between text-left flex py-4">
                    {question}
                    {
                        selected ? <span className={" right-0 float-right font-bold"}><AddIcon/></span>
                            :
                            <span className={" font-bold"}><RemoveIcon/></span>
                    }
                </p>
            </button>

            <div className={selected  ? "hidden transition-all max-h-0 duration-700 " : "pb-4"}>
                <div className={"section-description"}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}
export default Accordion