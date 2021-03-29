import React from 'react';
import HeaderImg from 'components/common/Layout/HeaderImage';
import FloatingButton from 'components/common/FloatingButtons';
import CountryInfoCard from 'components/common/CountryInfoCard';
import DocumentsSection from 'components/common/DocumentsSection';
import TravellersSection from 'components/common/TravellersSection';
import PaymentSection from 'components/common/PaymentSection';
import FloatingMessageButton from 'components/common/FloatingMessageButton';
import Response from 'components/common/Response';
import Button from 'components/common/Button';
import BottomButtonPopover from 'components/common/BottomButtonPopover';
import { tripObjectType } from './types';
const Trip = ({
	srcSet,
	status,
	response,
	date_of_document_submission,
	documents,
	dates,
	country,
	visaType,
	city,
	amount
}: tripObjectType) => {
	return (
		<div className="flex flex-col md:mx-24 shadow-lg md:shadow-none relative">
			<FloatingButton
				src={'cross.svg'}
				srcSet={'cross.svg 640w, chevron-left.svg 1024w'}
				alt={'cancel'}
			/>
			<HeaderImg srcSet={srcSet} country={country} />

			<section className="mx-5 my-5">
				<CountryInfoCard
					heading={`${country},${city}`}
					subHeading={visaType}
					date={dates}
					status={status}
				/>
			</section>

			{['inProgress', 'attentionReq'].includes(status) ? (
				<>
					<section className="mx-5 my-5">
						<DocumentsSection
							documents={documents}
							visaStatus={status}
						/>
					</section>

					<section className="mx-5 my-5">
						<TravellersSection travellers={documents} />
					</section>
				</>
			) : (
				<>
					<section className="mx-5 my-5">
						<TravellersSection travellers={documents} />
					</section>
					<section className="mx-5 my-5">
						<DocumentsSection
							documents={documents}
							date_of_document_submission={date_of_document_submission}
							visaStatus={status}
						/>
					</section>
				</>
			)}

			{response && (
				<section className="mx-5 my-5">
					<Response {...response} visaStatus={status} />
				</section>
			)}

			<section className="mx-5 my-5 mb-28">
				<PaymentSection amount={amount} />
			</section>
			<FloatingMessageButton
				className=""
				variant="bottomRight"
				position={
					['approved', 'rejected'].includes(status)
						? 'bottom-28'
						: 'bottom-5'
				}
			/>

			{['approved', 'rejected'].includes(status) && (
				<section className="h-24 w-full">
					<BottomButtonPopover>
						<Button
							onClick={() => {
								console.log('downloading...');
							}}
							type="submit">
							{status === 'rejected'
								? 'Download rejection letter'
								: 'Download visa'}
						</Button>
					</BottomButtonPopover>
				</section>
			)}
		</div>
	);
};
export default Trip;
