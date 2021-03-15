import React from 'react';
import styles from './typography.module.css';

type StyleType = "heading1"
                 | "heading2"
                 | "heading3"
                 | "heading4"
                 | "heading5"
                 | "heading6"
                 | "heading7"
                 | "heading8"
                 | "subHeading1"
                 | "subHeading2"
                 | "subHeading3"
                 | "subHeading4"
                 | "subHeading5"
                 | "subHeading6"
                 | "subHeading7"
                 | "subHeading8"
                 | "content1"
                 | "content2"
                 | "content3"
                 | "content4"
                 | "content5"
                 | "content6"
                 | "content7"
                 | "content8" ;

type variantType = "h1"
                    | "h2"
                    | "h3"
                    | "h4"
                    | "h5"
                    | "h6"
                    | "p"

            


type ITypographyProps = {
  type: StyleType;
  className?: string;
  variant: variantType;
  children: React.ReactChild | React.ReactChildren | React.ReactChild[] | React.ReactChildren[] ;
}
const Typography = ({ type, className = '', variant, children }: ITypographyProps) => {

  const Component = variant;
  className = className.concat(' ');

  return (
      <Component className={className.concat(styles[type])} >
        {children}
      </Component>
  );
}

export default Typography;
