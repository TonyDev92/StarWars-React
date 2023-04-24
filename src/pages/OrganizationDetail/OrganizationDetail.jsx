import React from 'react';
import { useLocation } from 'react-router';
import Organization from '../../components/Organization/Organization';

const OrganizationDetail = () => {
  const location = useLocation();
  const orgToPrint = location.state.element;

  return (
    <div>
      <Organization organization={orgToPrint}/>
    </div>
  )
}

export default OrganizationDetail;
