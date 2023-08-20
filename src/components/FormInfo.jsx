import React, { useState } from 'react';
import { DevTool } from '@hookform/devtools';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import '../index.css';

const FormInfo = ({
  title,
  instagramPostLikes,
  instagramFollowers,
  youtubeVideoLikes,
  onCapitalise,
}) => {
  const form = useForm();

  const { register, control, reset, handleSubmit, formState } = form;
  const [orderId, setOrderId] = useState('');

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    let url =
      'https://api.sheety.co/06def408e74850aef0fbd22a79539f9f/ldServices/orders';
    let body = {
      order: {
        orderId: `${nanoid()}`,
        serviceId: `${nanoid()}`,
        link: `${data?.username}`,
        amount: `${data?.amount}`,
      },
    };

    setOrderId(body?.order?.orderId);

    fetch(url, {
      method: 'POST',
      body: JSON?.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response?.json())
      .then((json) => {
        // Do something with response object
        return json?.order;
      });

    reset();
    // setSubmitSuccess(true);
  };

  return (
    <div>
      <form
        className='bg-gray-400 max-w-[40rem] text-center mx-auto p-8 space-y-8 mt-20'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className='text-4xl text-center font-bold'>
          {onCapitalise?.(title)} Info
        </h2>
        <div className='form-group no'>
          <label htmlFor='username'>Username</label>
          <input
            className='w-[70%] p-[.5rem] text-[14px] ml-4'
            id='username'
            type='text'
            {...register('username', {
              required: { value: true, message: '*Username is required' },
            })}
          />
          <p className='text-red-600 text-xs'>{errors.username?.message}</p>
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            className='min-w-[70%] p-[.5rem] text-[14px] ml-4'
            type='number'
            id='amount'
            {...register('amount', {
              required: {
                value: true,
                message: '*Kindly provide the number of followers',
              },
            })}
          />
          <p className='text-red-600 text-xs'>{errors.amount?.message}</p>
        </div>
        <div className='form-group w-full'>
          <button className='bg-white w-fit mx-auto block py-4 px-8 text-sm rounded-[.4rem] border-none'>
            Submit
          </button>
        </div>
        {isSubmitSuccessful && (
          <p className='text-[#2E8B57]'>
            Form Submitted successfully with order id:{orderId}
          </p>
        )}
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default FormInfo;
