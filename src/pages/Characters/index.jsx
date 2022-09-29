import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../atoms/Card';
import CharacterContext from '../../context/CharacterContext';
import '../../styles/Character.css';
function CharacterPage() {
  const context = useContext(CharacterContext);
  const { data, limit, setLimit } = context;
  const handleLimit = () => {
    limit >= 62 ? setLimit(limit) : setLimit(limit + 8);
  };
  const [query, setQuery] = useState('');
  const filtered = data && data.filter(item => {
    return item.name.toLowerCase().includes(query.toLocaleLowerCase()) !== false
  });
  return (
    <div className='chmain'>
      {
        data && <form>
          <input placeholder='Enter name..' value={query} type="text" onChange={(e) => setQuery(e.target.value)} />
        </form>
      }
      {
        data ? filtered.map((item, index) => {
          return (
            <div className='card' key={index}>
              <Link to={`/${item.char_id}`}>
                <Card item={item} />
              </Link>
            </div>
          )
        }) : ""
      }
      <div className='button'>
        <button onClick={() => handleLimit()}>
          {data ? `Load more(${limit})` : `Loading..`}
        </button>
      </div>
      <div className='button2'>{limit >= 62 && 'Item was not found'}</div>
    </div>
  )
}

export default CharacterPage
