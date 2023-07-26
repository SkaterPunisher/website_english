import React from 'react';
import { FooterProps } from './Footer.props';

const Footer = ({ dictionary, className, ...props }: FooterProps) => {
  return <footer {...props}>{dictionary}</footer>;
};

export default Footer;
