import React from 'react';
import FormInfo from '../../components/FormInfo';
import { nanoid } from 'nanoid';

const InstagramFollowerPage = ({ title, instagramFollowers, onCapitalise }) => {
  console.log(instagramFollowers?.name);

  const res = instagramFollowers?.name?.indexOf('I');
  const words = instagramFollowers?.name?.slice(res, -1);

  return (
    <div>
      <FormInfo title={words} onCapitalise={onCapitalise} />
    </div>
  );
};

export default InstagramFollowerPage;

//  headers: {
//           'Content-Type': 'application/json',
//         },

// order: {
//         orderId: `${nanoid()}`,
//         serviceId: `${nanoid()}`,
//         link: `${data.username}`,
//         amount: `${data.amount}`,
//       },
