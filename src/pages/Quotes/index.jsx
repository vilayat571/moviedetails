import React, { useContext, useState } from 'react';
import QuoteContext from '../../context/QuoteContext';
import '../../styles/Carddeath.css';
function QuotePage() {
  const context=useContext(QuoteContext);
  const {data}=context;
  const [query, setQuery] = useState('');

  const filtered = data && data.filter(item => {
    return item.quote.toLowerCase().includes(query.toLocaleLowerCase()) !== false
  });
  return (
    <div style={{marginTop:"30px"}}>
       {
        data && <form>
          <input placeholder='Enter name..' value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
        </form>
      }
      {
        data && filtered.map((item, index) => {
          return (
            <div className='carddeath' key={index}>
              <span>The quotes is "{item.quote}".</span>
              <span>The author is "{item.author}" , </span>
              <span>and this quote belong the serios of "{item.series}".</span>
            </div>
          )
        }) 
      }
      {
        !data && <div className='loading'>Loading..</div>
      }
       {
        data && <div className='button'>Quotes count - {filtered.length}</div>
      }
    </div>
  )
}

export default QuotePage
