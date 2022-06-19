import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import './LoadMore.css';

import Data from './data.json';

const ReadMoreReadLess = () => {
  console.log(Data);

  const [items, setItems] = useState(Data);
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="card-container">
      <div className="cards">
        {items.slice(0, visible).map((item) => (
          <div key={item.id} className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <div className="card-title">
              <h3>{item.title}</h3>
            </div>
            <div className="card-desc">{item.description}</div>
            <div className="card-address">
              <FontAwesomeIcon
                icon={faLocationDot}
                color={'#990000'}
                className="font-icon"
              />
              <span className="card-addr">{item.address}</span>
            </div>
            <div className="card-d">
              <div className="card-days">
                <FontAwesomeIcon
                  icon={faClock}
                  color={'#383838'}
                  className="font-icon"
                />
                <span className="card-day">{item.day} gün önce</span>
              </div>
              <div className="card-days">
                <FontAwesomeIcon
                  icon={faPhone}
                  color={'#383838'}
                  className="font-icon"
                />
                <span className="card-day">{item.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="btn-load" onClick={showMoreItems}>
          {!(visible > 13) ? 'Daha Fazla Yükle' : 'Başka sonuç bulunamadı'}
        </button>
      </div>
    </div>
  );
};

export default ReadMoreReadLess;
