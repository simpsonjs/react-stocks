import React from 'react';
import moment from 'moment';

const NewsTab = ({ newsInfo }) => {

  if (!newsInfo.data) return null;

  function dateFormat(date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  function items() {
    return newsInfo.data.map((item) => {
      return (
        <div key={item.guid[0]._} className="news-well">
          <h3><a href={item.link} target="_blank" className="news-url">{item.title}</a></h3>
          <p>{item.description}</p>
          <p className="news-date">{dateFormat(item.pubDate[0])}</p>
        </div>
      );
    });
  }

  return (
    <div className="section-heading">
      {items()}
    </div>
  );
}

export default NewsTab;
