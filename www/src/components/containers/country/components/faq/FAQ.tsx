import React from 'react';
import Accordion from '../accordian/Accordion';
import Typography from "../../../../common/Typography";

type IFAQProps = {
  question:string;
  answer:string;
}
type IFAQArrayProps = {
  faq:Array<IFAQProps>
}

function FAQ({faq}:IFAQArrayProps){

    return(
        <>
            {
                faq !== undefined ?
                    <section className="p-4">
                        <Typography weight="extra-bold" size="18" variant="h3" className="mb-5">Frequently Asked Questions</Typography>
                        {
                            faq.map((item:IFAQProps, index)=>{
                                return <Accordion
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                />
                          })
                        }
                    </section>
                :
                  <section/>
            }
        </>
    )
}
export default FAQ