import React from "react";
import Typography from "components/common/Typography";
import DocumentStatusCard from "components/common/DocumentStatusCard";
import { IDocumentStatusCardProps } from "components/common/DocumentStatusCard";

export type documentStatusType = "inProgress" | "submitted";
export type IDocumentsSection = {
    status: documentStatusType;
    documents: IDocumentStatusCardProps[]
}

const DocumentsSection = ({status, documents}: IDocumentsSection) => {
    const getHeading = ():string => {
        switch(status) {
            case "inProgress": return "Document upload";
            case "submitted": return "Documents submitted";
        }
    }
    const getContent = ():string => {
        switch(status) {
            case "inProgress": return "The sooner these docs are uploaded the sooner we can start the visa processing";
            case "submitted": return "Your docs are always safe with us. Experience superfast processing of visas now";
        }
    }
    return (
        <>
            <Typography weight="extra-bold" size="18" variant="h3" className="my-3">
                {getHeading()}
            </Typography> 
            <Typography type="content" weight="semi-bold" size="14" variant="p">
                {getContent()}
            </Typography> 
            {   documents.map((document) => {
                    return <DocumentStatusCard {...document}/>
                })
            }
        </>
    );
};
export default DocumentsSection