import BackButton from 'components/common/backButton';
import DocumentStatusCard from 'components/common/DocumentStatusCard';
import React from 'react';

function MainCard({ data }) {
	const onBackButtonClick = () => null;
	return (
		<>
			<BackButton onClick={onBackButtonClick} />
			<DocumentStatusCard
				{...data}
				name={data.name}
				status={data.status}
				visaStatus={data.visaStatus}
				relation={data.relation}
				numOfCompletedDocs={data.numOfCompletedDocs}
				totalNumOfDocs={data.totalNumOfDocs}
				removeShadow={true}
			/>
		</>
	);
}

export default MainCard;
