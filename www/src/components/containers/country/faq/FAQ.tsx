import React from 'react';
import Accordion from '../accordian/Accordion';
import Typography from "../../../common/Typography";

function FAQ(){
    return(
        <div className="p-4">
            <Typography type="headingExtraBold18px" variant="h3">Frequently Asked Questions</Typography>
            <Accordion
                question={"Once I apply, when I will receive my visa?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
            />
            <Accordion
                question={"What is an eVisa?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
            />
            <Accordion
                question={"How long is my visa valid for and how much does it cost how much does it cost?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
            />
        </div>
    )
}
export default FAQ