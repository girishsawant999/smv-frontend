import React from 'react';
import Typography from 'components/common/Typography';

type IPaymentSectionProps = {
  amount: number;
};
const PaymentSection = ({ amount }: IPaymentSectionProps) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-8/12 mb-3">
          <Typography weight="extra-bold" size="18" variant="h3">
            Total Payment
          </Typography>
        </div>
        <div className="w-4/12 text-right mb-3">
          <Typography type="content" size="14" weight="regular" variant="p">
            Rs {amount}
          </Typography>
        </div>
        <Typography
          weight="semi-bold"
          size="14"
          variant="p"
          className="content mb-2">
          This is inclusive of SMV service charges and the normal Visa charges.
        </Typography>
        <Typography weight="extra-bold" size="12" variant="p" className="underline">
          Breakup
        </Typography>
      </div>
    </>
  );
};
export default PaymentSection;
