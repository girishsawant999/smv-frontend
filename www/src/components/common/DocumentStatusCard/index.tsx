import React from 'react';
import Typography from 'components/common/Typography';
import ProgressBar from 'components/common/ProgressBar';
import styles from './DocumentStatusCard.module.css';

export type IDocumentStatusCardProps = {
  name: string;
  status: 'notStarted' | 'inProgress' | 'completed';
  progress: number;
  relation: string;
  numOfCompletedDocs: number;
  totalNumOfDocs: number;
};
const DocumentStatusCard = ({
  name,
  status,
  progress,
  relation,
  numOfCompletedDocs,
  totalNumOfDocs
}: IDocumentStatusCardProps) => {
  const getStatusText = (): string => {
    switch (status) {
      case 'notStarted':
        return 'Yet to start';
      default:
        return '';
    }
  };
  return (
    <div className={styles.docStatusCard + ' px-5 py-5 my-5 cursor-pointer'}>
      <div className="flex mb-5">
        <div className="w-8/12">
          <Typography weight="extra-bold" size="20" variant="h4">
            {name}
          </Typography>
        </div>
        <div className="w-4/12 text-right relative">
          <Typography
            weight="semi-bold"
            size="12"
            variant="p"
            className={'absolute bottom-0 right-0 ' + styles.status}>
            {getStatusText()}
          </Typography>
        </div>
      </div>
      <ProgressBar percent={progress} />
      <div className="flex mt-3">
        <div className="w-4/12">
          <Typography weight="semi-bold" size="16" variant="p">
            {relation}
          </Typography>
        </div>
        <div className="w-8/12 text-right">
          <Typography weight="regular" size="12" variant="p">
            {`${numOfCompletedDocs} of ${totalNumOfDocs} documents uploaded`}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default DocumentStatusCard;
