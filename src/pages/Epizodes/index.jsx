import React, { useContext, useState } from 'react';
import EpisodeContext from '../../context/EpisodeContext';
import '../../styles/Carddeath.css';
function EpizodePage() {
  const context = useContext(EpisodeContext);
  const { data } = context;
  const [query, setQuery] = useState('');

  const filtered = data && data.filter(item => {
    return item.title.toLowerCase().includes(query.toLocaleLowerCase()) !== false
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
              <span>The title is "{item.title}" , </span>
              <span>and the date is "{item.air_date}" , </span>
              <span>and this quote belong the serios of "{item.series}".</span>
            </div>
          )
        })
      }
      {
        !data && <div className='loading'>Loading..</div>
      }
      {
        data && <div className='button'>Episodes count - {filtered.length}</div>
      }
    </div>
  )
};
export default EpizodePage;