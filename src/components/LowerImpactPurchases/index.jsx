import React from 'react';
import { useState } from 'react';
import './styles.scss';
import { oneMonth, oneYear } from './data';
import { ReactComponent as NegativeEmoji } from './assets/emoji-negative.svg';
import { ReactComponent as NeutralEmoji } from './assets/emoji-neutral.svg'


export const LowerImpactPurchases = () => {
  const [changeView, setChangeView] = useState(true);
  const [rowLengthMonth, setRowLengthMonth] = useState(oneMonth);
  const [rowLengthYear, setRowLengthYear] = useState(oneYear);

  const handleClick = () => {
    return setChangeView(!changeView)
  }


  return (
  <div className='lower-impact-purchases section'>
    <h2>Your Table Here</h2>

    <div className='tablePage'>
    <div className='tableTitle'>
      <h2>Lower Impact Purchases</h2>
    </div>

    <NegativeEmoji />
    <NeutralEmoji />

    <div className='rowLengths'>
      <h3>{`There are ${rowLengthMonth.length} lower impact companies in the past month and ${rowLengthYear.length} lower impact companies in the past 12 months.` }</h3>
    </div>


    {/* Change View Buttons */}

    {/* {changeView ? ( */}

    <button className={oneYear} onClick={() => handleClick({changeView})}>
      <p>Last 12 months</p>
    </button>

    {/* ) : ( */}

    <button className={oneMonth} onClick={() => handleClick(changeView)}>
    <p>Last 30 days</p>
    </button>
    {/* )} */}

    {changeView ? (


    <div className={oneMonth}>
    <div className='container'>
    {/* One Month Table */}

      {oneMonth.map((key) => (
          <>
          <div id={key._id} className='companyRating'>
            <a href={key.company.url}>
              {key.company.rating}
            </a>
          </div>

          <div className='companyName'>
            <a href={key.company.url}>
              {key.company.companyName}
            </a>
          </div>

          <div className='totalSpent'>
            <a href={key.company.url}>
              ${key.totalSpent.toFixed(2)}
            </a>
          </div>

          <div className='URL'>
            <a href={key.company.url}>
              ▷
            </a>
          </div>
        </>
      ))}
    </div>
    </div>

    ) : (

  <div className={oneYear}>
    <div className='container'>

      {oneYear.map((key) => (
          <>
          <div id={key._id} className='companyRating'>
            <a href={key.company.url}>
              {key.company.rating}
            </a>
          </div>

          <div className='companyName'>
            <a href={key.company.url}>
              {key.company.companyName}
            </a>
          </div>

            <div className='totalSpent'>
              <a href={key.company.url}>
                ${key.totalSpent.toFixed(2)}
              </a>
            </div>

            <div className='URL'>
              <a href={key.company.url}>
                ▷
              </a>
          </div>
          </>
      ))}
      </div>
      </div>
    )}
    </div>

    </div>
  )
}