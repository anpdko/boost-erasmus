import React from 'react';

export interface IItem {
   id: string;
   title: string;
   link: string;
   icon: React.ReactNode;
}


export const list:IItem[] = [
   {
      id: "1",
      title: 'Events',
      link: '/',
      icon: (<i className='bi bi-calendar-event'></i>)
   },
]