import React from 'react';
import Typography from 'components/common/Typography';

type IBreadcrumbsProps = {
	breadcrumbs: string[];
};
const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbsProps) => {
	return (
		<>
			{breadcrumbs.slice(0, -1).map((breadcrumb, index) => {
				return (
					<Typography
						key={index}
						size="10"
						variant="span"
						weight="regular">
						{breadcrumb} •
					</Typography>
				);
			})}
			<Typography size="10" variant="span" weight="semi-bold">
				{breadcrumbs[breadcrumbs.length - 1]}
			</Typography>
		</>
	);
};
export default Breadcrumbs;
