import React, { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

interface IProps {
  breadcrumb: boolean;
  children: ReactNode[],
  
}

const PageWrapper: React.FC<IProps> = ({ breadcrumb = false, children }) => {
  return (
    
  )
};

export default PageWrapper;
