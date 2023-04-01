import React from 'react';

export function errorMsg(meesage){
  return <div className='text-red-500 bg-red-100 p-1 text-center rounded'>
    {meesage}
  </div>
}
