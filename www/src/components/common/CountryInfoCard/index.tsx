import React from 'react';
import Typography from 'components/common/Typography';
import styles from './CountryInfoCard.module.css';

type ICoutryInfoProps = {
	heading?: string;
	subHeading?: string;
	date?: string;
	content?: string;
	status?: string;
};

const CountryInfoCard = ({
	heading,
	subHeading,
	date,
	content,
	status
}: ICoutryInfoProps) => {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-8/12">
					{heading && (
						<Typography
							size="24"
							weight="extra-bold"
							variant="h1"
							className="mb-1">
							{heading}
						</Typography>
					)}
				</div>
				{status && status != 'inProgress' && (
					<div className="w-4/12 text-right">
						<Typography
							size="12"
							weight="semi-bold"
							variant="p"
							className={'mb-1 capitalize pt-3 '.concat(
								styles[status]
							)}>
							{status}
						</Typography>
					</div>
				)}
				<div className="w-7/12">
					{subHeading && (
						<Typography
							size="16"
							type="content"
							weight="semi-bold"
							variant="h3"
							className="mb-2.5">
							{subHeading}
						</Typography>
					)}
				</div>
				<div className="w-5/12 text-right">
					{date && (
						<Typography
							size="14"
							type="content"
							weight="regular"
							variant="h3"
							className="mb-2.5">
							{date}
						</Typography>
					)}
				</div>
			</div>
			{content && (
				<Typography type="content" size="14" weight="regular" variant="p">
					{content}
				</Typography>
			)}
		</>
	);
};
export default CountryInfoCard;
