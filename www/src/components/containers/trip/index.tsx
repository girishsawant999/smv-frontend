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
import Breadcrumb from 'components/common/Breadcrumbs';
import { tripObjectType } from './types';
import styles from './Trip.module.css';
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
			<div className="flex flex-col">
				<FloatingButton
					src={'cross.svg'}
					srcSet={'cross.svg 640w, chevron-left.svg 1024w'}
					alt={'cancel'}
					text={
						<Breadcrumb
							breadcrumbs={['Home', 'Trips', `${country}, ${city}`]}
						/>
					}
				/>
			</div>
			<section className="md:relative md:top-60">
				<HeaderImg srcSet={srcSet} country={country} />
			</section>

			<section className="mx-5 my-5 md:absolute md:top-20 md:mx-0 md:w-full">
				<CountryInfoCard
					heading={`${country},${city}`}
					subHeading={visaType}
					date={dates}
					status={status}
				/>
			</section>
			<div
				className={[
					'md:relative md:top-72 md:w-full',
					styles[
						['inProgress', 'attentionReq'].includes(status)
							? 'grid-container-card'
							: 'grid-container-no-card'
					]
				].join(' ')}>
				{['inProgress', 'attentionReq'].includes(status) ? (
					<>
						<section
							className={[
								'mx-5 my-5 md:mx-0',
								styles['documents']
							].join(' ')}>
							<DocumentsSection
								documents={documents}
								visaStatus={status}
							/>
						</section>

						<section
							className={[
								'mx-5 my-5 md:mx-0',
								styles['travellers']
							].join(' ')}>
							<TravellersSection travellers={documents} />
						</section>
					</>
				) : (
					<>
						<section
							className={[
								'mx-5 my-5 md:mx-0',
								styles['travellers']
							].join(' ')}>
							<TravellersSection travellers={documents} />
						</section>
						<section
							className={[
								'mx-5 my-5 md:mx-0',
								styles['documents']
							].join(' ')}>
							<DocumentsSection
								documents={documents}
								date_of_document_submission={
									date_of_document_submission
								}
								visaStatus={status}
							/>
						</section>
					</>
				)}

				{response && (
					<section
						className={['mx-5 my-5 md:mx-0', styles['response']].join(
							' '
						)}>
						<Response {...response} visaStatus={status} />
					</section>
				)}

				<section
					className={['mx-5 my-5 mb-28 md:mx-0', styles['payment']].join(
						' '
					)}>
					<PaymentSection amount={amount} />
				</section>
				<FloatingMessageButton
					className=""
					variant="bottomRight"
					position={
						['approved', 'rejected'].includes(status)
							? 'bottom-28 md:bottom-36 md:right-24'
							: 'bottom-5 md:right-24'
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
		</div>
	);
};
export default Trip;
