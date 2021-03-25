export type IPackInfo = {
  id: number;
  days: string;
  price: string;
  oldPrice: string;
  description: string;
};
export type IAddonService = {
  id: number;
  info: string;
  detail: string;
  price: string;
  oldPrice: string;
  description: string;
};
export type IAdditionalDoc = {
  condition: string;
  list: Array<string>;
};
export type IFaq = {
  question: string;
  answer: string;
};
export type IInputDataProps = {
  success: boolean;
  data: {
    countryInfo: {
      name: string;
      processingTime: string;
      description: string;
    };
    packsInfo: Array<IPackInfo>;
    addonService: Array<IAddonService>;
    importantInfo: Array<string>;
    documentList: Array<string>;
    additionalDocList: Array<IAdditionalDoc>;
    faq: Array<IFaq>;
  };
};
