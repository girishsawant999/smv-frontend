import React from 'react';
import Typography from 'components/common/Typography';

type travellerType = {
  name: string;
  relation: string;
};
type ITravellersSectionProps = {
  travellers: travellerType[];
};
const TravellersSection = ({ travellers }: ITravellersSectionProps) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-8/12 mb-3">
          <Typography weight="extra-bold" size="18" variant="h3">
            Travellers
          </Typography>
        </div>
        <div className="w-4/12 text-right mb-3">
          <Typography type="content" size="14" weight="regular" variant="p">
            {travellers.length}
          </Typography>
        </div>
        {travellers.map((traveller) => {
          return (
            <>
              <div className="w-8/12 mb-0.5">
                <Typography weight="semi-bold" size="14" variant="p" type="content">
                  {traveller.name}
                </Typography>
              </div>
              <div className="w-4/12 text-right mb-1">
                <Typography type="content" size="14" weight="regular" variant="p">
                  {traveller.relation}
                </Typography>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default TravellersSection;
