import React from 'react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...rest }) => {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};

export default CustomLink;
