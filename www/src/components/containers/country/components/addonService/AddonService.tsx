import React from 'react';
import AddonInfo from '../addonInfo/AddonInfo';
import Typography from '../../../../common/Typography';
import { IAddonService } from '../../types';

type IAddonServiceArrayProps = {
  addonService: Array<IAddonService>;
  addonPacks: Array<number>;
  setAddonPacks: Function;
};
function AddonService({
  addonService,
  addonPacks,
  setAddonPacks
}: IAddonServiceArrayProps) {
  return (
    <>
      {addonService !== undefined ? (
        <section className="m-5">
          <Typography size="18" weight="extra-bold" variant="h3">
            Add-on services
          </Typography>
          {addonService.map((packsItem: IAddonService, index) => {
            return (
              <AddonInfo
                key={index}
                id={packsItem.id}
                info={packsItem.info}
                detail={packsItem.detail}
                price={packsItem.price}
                oldPrice={packsItem.oldPrice}
                description={packsItem.description}
                addonPacks={addonPacks}
                setAddonPacks={setAddonPacks}
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
export default AddonService;
