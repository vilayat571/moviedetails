import React, { useContext, useEffect, useState } from 'react';
import DeathContext from '../../context/DeathContext'
import '../../styles/Carddeath.css';

function Deathes() {
  const context = useContext(DeathContext);
  const [count, setCount] = useState('')
  const { data } = context;
  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/death-count')
      .then(res => res.json())
      .then(data => setCount(data))
  }, [count]);
  const [query, setQuery] = useState('');

  const filtered = data && data.filter(item => {
    return item.death.toLowerCase().includes(query.toLocaleLowerCase()) !== false
  });
  return (
    <div className='chmain'>
      {
        data && <form>
          <input placeholder='Enter name..' value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
        </form>
      }
      {
        data && filtered.map((item, index) => {
          return (
            <div className='carddeath' key={index}>
              <span>Death is {item.death},</span>
              <span>and the responsible is {item.responsible} , </span>
              <span>the last words of {item.death} is {item.last_words}.</span>
              <span>The death was died in the {item.episode} episode of the {item.season} season.</span>
            </div>
          )
        })
      }
      {
        !data && <div className='loading'>Loading..</div>
      }
      {
        count && <div className='button'>Death count - {filtered.length}</div>
      }
    </div>
  )
}

export default Deathes
