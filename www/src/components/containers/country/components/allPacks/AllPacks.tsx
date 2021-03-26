import React from 'react';
import PackInfo from '../packInfo/PackInfo';
import Typography from '../../../../common/Typography';
import { IPackInfo } from '../../types';

type IPackInfoArrayProps = {
	packsInfo: Array<IPackInfo>;
	selectedPack: number;
	setSelectedPack: Function;
};

function AllPacks({
	packsInfo,
	selectedPack,
	setSelectedPack
}: IPackInfoArrayProps) {
	return (
		<>
			{packsInfo !== undefined ? (
				<section className="m-5">
					<div className=" flex items-end justify-between mb-2.5">
						<Typography size="18" weight="extra-bold" variant="h3">
							All packs
						</Typography>
						<Typography
							size="12"
							weight="extra-bold"
							variant="h4"
							className="underline cursor-pointer">
							show relevant packs
						</Typography>
					</div>
					<Typography
						type="content"
						weight="semi-bold"
						size="14"
						variant="p"
						className="mb-1">
						All our packs are inclusive of consultation fees, service
						charges & other taxes
					</Typography>
					{packsInfo.map((packsItem: IPackInfo, index) => {
						return (
							<PackInfo
								key={index}
								id={packsItem.id}
								days={packsItem.days}
								price={packsItem.price}
								oldPrice={packsItem.oldPrice}
								description={packsItem.description}
								selectedPack={selectedPack}
								setSelectedPack={setSelectedPack}
							/>
						);
					})}
				</section>
			) : (
				<section />
			)}
		</>
	);
}
export default AllPacks;
