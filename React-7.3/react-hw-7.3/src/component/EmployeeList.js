import React from 'react';
import EmployeeListItem from './EmployeeListItem';

function EmployeeList() {

  return (
    <div className='employeelist'>
      <EmployeeListItem img={require('../image/user2.jpg')} name='James King' position='President and CEO'/> 
      <EmployeeListItem img={require('../image/user3.jpg')} name='Julie Taylor' position='VP of Marketing'/>
      <EmployeeListItem img={require('../image/user4.jpg')} name='Eugene Lee' position='CFO'/>
      <EmployeeListItem img={require('../image/user5.jpg')} name='John Williams' position='VP of Engineering'/>
      <EmployeeListItem img={require('../image/user6.png')} name='Ray Moore' position='VP of Sales'/>
      <EmployeeListItem img={require('../image/user7.png')} name='Paula Jones' position='QA Manager'/>
      
    </div>
  )
}

export default EmployeeList;