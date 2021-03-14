import React from 'react';
import Accordion from './Accordion';

function FAQ(){
    return(
        <div className="faq-div p-4">
            <div className="section-heading">Frequently Asked Questions</div>
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