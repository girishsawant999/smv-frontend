import FloatingMessageButton from 'components/common/FloatingMessageButton';
import Typography from 'components/common/Typography';
import React from 'react';
import MainCard from './components/mainCard';

const data = {
	name: 'Atul Khola',
	status: 'Yet to start',
	numOfCompletedDocs: 2,
	totalNumOfDocs: 15,
	relation: 'Me',
	documentsRequired: [
		{
			label: 'Mandatory docs',
			documents: [
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				},
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				}
			]
		},
		{
			label: 'Forms & Letters',
			documents: [
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				},
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				}
			]
		},
		{
			label: 'Travel',
			documents: [
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				},
				{
					label: 'Loreum ipsum',
					status: 'Pending',
					description:
						'The sooner these docs are uploaded the sooner we can start the visa processing'
				}
			]
		}
	]
};

function DocumentUpload({}) {
	const onClickUpload = () => {};
	return (
		<>
			<div className="sticky top-0 bg-white">
				<div className="px-5 pt-5">
					<MainCard data={data} />
				</div>
				<div className="flex overflow-x-auto overflow-y-hidden bg-#F5F4F5 my-auto px-5 py-3">
					{data.documentsRequired &&
						data.documentsRequired.map(({ label }) => (
							<a
								href={`#${label.replace(/\s/g, '')}`}
								className="px-5 py-3 flex-none bg-white rounded-2xl mr-4">
								<Typography
									weight="extra-bold"
									size="12"
									variant="span">
									{label}
								</Typography>
							</a>
						))}
				</div>
			</div>

			<div className="px-5 overflow-auto">
				{data.documentsRequired &&
					data.documentsRequired.map(({ label, documents }, index) => (
						<>
							<div
								className="mt-10 mb-5"
								id={`${label.replace(/\s/g, '')}`}>
								<Typography
									weight="extra-bold"
									size="20"
									variant="h2">
									{label}
								</Typography>
							</div>

							{documents &&
								documents.map((document) => (
									<>
										<div className="flex justify-between items-center">
											<Typography
												weight="semi-bold"
												size="18"
												variant="h3">
												{document.label}
											</Typography>
											<Typography
												variant="span"
												size="12"
												type="content"
												weight="semi-bold">
												<span className="text-#FFB600">
													{document.status}
												</span>
											</Typography>
										</div>
										<Typography
											variant="p"
											size="14"
											type="content"
											weight="regular"
											className="mt-3">
											{document.description}
										</Typography>

										<Typography
											weight="extra-bold"
											variant="h4"
											size="14"
											className="underline mt-2">
											<button
												type="button"
												className="focus:outline-none underline font-extrabold"
												onClick={onClickUpload}>
												Upload
											</button>
										</Typography>

										<hr className="my-4" />
									</>
								))}
						</>
					))}
			</div>
			<FloatingMessageButton
				className=""
				variant="bottomRight"
				position="bottom-5"
			/>
		</>
	);
}

export default DocumentUpload;
