import React, { Component } from 'react';
import './Months.css'
import { months } from '../../months_data.js'

const Months = ({ birthdays }) => {

  const monthsGrid = months.map((month) => {

    return (
      <div className='month-block'>
        <article>
          <h2 className='month-name'>{month.name}</h2>
        </article>
      </div>
    )
  })

  return (
    <div className='months-grid'>
      {monthsGrid}
    </div>
  )

}

export default Months;
