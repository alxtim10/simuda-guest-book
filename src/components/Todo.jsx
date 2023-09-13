import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({ guests, removeGuest }) => {

  return guests.map((guest, index) => (
    <div
      className={'todo-row'}
      key={index}
    >
      <div>
        {guest.name}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeGuest(guest.id)}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;