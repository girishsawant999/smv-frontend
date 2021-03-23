import React from 'react';
import Typography from '../../../common/Typography';
import Img from '../../../common/Img';

type ICustomerReviewObjectProps = {
  comment: string;
  gender: string;
  country: string;
  name: string;
};

type ICustomerReviewBoxProps = {
  customer_review_list: Array<ICustomerReviewObjectProps>;
};

function avatarImage(gender: string) {
  if (gender == 'male') {
    return (
      <div className="w-20">
        <Img
          srcSet={[
            'landing/avatar_male_image/image-removebg-3.png 1x',
            'landing/avatar_male_image/image-removebg-3@2x.png 2x',
            'landing/avatar_male_image/image-removebg-3@3x.png 3x'
          ]}
          alt="Male cartoon image"
        />
      </div>
    );
  } else {
    return (
      <div className="w-16">
        <Img
          srcSet={[
            'landing/avatar_female_image/image-removebg-4.png 1x',
            'landing/avatar_female_image/image-removebg-4@2x.png 2x',
            'landing/avatar_female_image/image-removebg-4@3x.png 3x'
          ]}
          alt="Female cartoon image"
        />
      </div>
    );
  }
}

function right(item: ICustomerReviewObjectProps, index: number) {
  return (
    <div key={index} className="flex mt-10 w-2/3">
      <div className="relative flex">
        <div className="bg-white rounded-20px p-5">
          <Typography type="content" size="12" weight="semi-bold" variant="h3">
            {item.comment}
          </Typography>
          <Typography
            type="heading"
            size="10"
            weight="semi-bold"
            variant="h4"
            className="mt-3">
            {item.name}
          </Typography>
          <Typography type="content" size="12" weight="regular" variant="p">
            {item.country}
          </Typography>
        </div>
        <div className="absolute -right-5 bottom-5">
          <Img
            srcSet={['landing/right_path_chat/path-5@3x.png']}
            alt="right_path_chat"
            width="20"
            height="46"
          />
        </div>
        <div className="absolute -bottom-4 -right-24">
          <div className="pl-7 mt-14 w-26">{avatarImage(item.gender)}</div>
        </div>
      </div>
    </div>
  );
}

function left(item: ICustomerReviewObjectProps, index: number) {
  return (
    <div className="flex mt-10 justify-end w-full">
      <div key={index} className="flex justify-end">
        <div className="relative bg-white rounded-20px p-5 flex flex-col w-2/3">
          <Typography type="content" size="12" weight="semi-bold" variant="h3">
            {item.comment}
          </Typography>
          <Typography
            type="heading"
            size="10"
            weight="semi-bold"
            variant="h4"
            className="mt-3">
            {item.name}
          </Typography>
          <Typography type="content" size="12" weight="regular" variant="p">
            {item.country}
          </Typography>
          <div className="absolute bottom-5 -left-5">
            <Img
              srcSet={['landing/left_path_chat/path-5@3x.png']}
              alt="right_path_chat"
              width="20"
              height="46"
            />
          </div>
          <div className="absolute -bottom-4 -left-20">
            <div className="pt-7">{avatarImage(item.gender)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerReview(props: ICustomerReviewBoxProps) {
  return (
    <div>
      {props.customer_review_list.map((item, index) => {
        if (index % 2 === 0) {
          return right(item, index);
        } else {
          return left(item, index);
        }
      })}
    </div>
  );
}

export default CustomerReview;
