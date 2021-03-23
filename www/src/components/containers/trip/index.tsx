import React from 'react';
import HeaderImg from 'components/common/Layout/HeaderImage';
import FloatingButton from 'components/common/FloatingButtons';
import CountryInfoCard from 'components/common/CountryInfoCard';
import DocumentsSection, {
  documentStatusType
} from 'components/common/DocumentsSection';
import TravellersSection from 'components/common/TravellersSection';
import PaymentSection from 'components/common/PaymentSection';
import { IDocumentStatusCardProps } from 'components/common/DocumentStatusCard';
type tripObjectType = {
  country: string;
  city: string;
  srcSet: string[];
  visaType: string;
  dates: string;
  status: documentStatusType;
  documents: IDocumentStatusCardProps[];
  amount: number;
};
const tripObject: tripObjectType = {
  country: 'Australia',
  city: 'Victoria',
  srcSet: [
    'country/country.png',
    'country/country@2x.png 2x',
    'country/country@3x.png 3x'
  ],
  visaType: '90 days tourist visa',
  dates: '15-16 May 2021',
  status: 'inProgress',
  documents: [
    {
      name: 'Atul Khola',
      status: 'notStarted',
      progress: 2,
      relation: 'Me',
      numOfCompletedDocs: 0,
      totalNumOfDocs: 15
    },
    {
      name: 'Ayaan Khola',
      status: 'notStarted',
      progress: 2,
      relation: 'Son',
      numOfCompletedDocs: 0,
      totalNumOfDocs: 15
    }
  ],
  amount: 10000
};
const Trip = () => {
  return (
    <div className="flex flex-col md:max-w-sm md:mx-auto shadow-lg relative">
      <FloatingButton src={'chevron-left.svg'} alt={'cancel'} />
      <HeaderImg srcSet={tripObject.srcSet} country={tripObject.country} />

      <section className="mx-5 my-5">
        <CountryInfoCard
          heading={`${tripObject.country},${tripObject.city}`}
          subHeading={tripObject.visaType}
          date={tripObject.dates}
        />
      </section>

      <section className="mx-5 my-5">
        <DocumentsSection
          status={tripObject.status}
          documents={tripObject.documents}
        />
      </section>

      <section className="mx-5 my-5">
        <TravellersSection travellers={tripObject.documents} />
      </section>

      <section className="mx-5 my-5">
        <PaymentSection amount={tripObject.amount} />
      </section>
    </div>
  );
};
export default Trip;
