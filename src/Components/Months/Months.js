import React, { Component } from 'react';
import './Months.css'
import { months } from '../../months_data.js'

const Months = ({ birthdays }) => {

  const monthsGrid = months.map((month) => {

    const monthlyBdays = birthdays.filter(birthday => birthday.month === month.id)
    console.log(monthlyBdays);
    const allBdays = monthlyBdays.reduce((acc, bday) => {
      acc += `${bday.name}: ${bday.month}/${bday.day}`
      return acc
    }, '')

    return (
      <div className='month-block'>
        <article>
          <h2 className='month-name'>{month.name}</h2>
          {monthlyBdays.length && allBdays}
          {!monthlyBdays.length && <p>No birthdays this month.</p>}
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
