import React from 'react'
import { FooterProps } from './Footer.props'

const Footer = ({ className, ...props }: FooterProps) => {
  return <footer {...props}>Footer</footer>
}

export default Footer
