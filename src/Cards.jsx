import React from 'react';

function Cards({ job }) {
  return (
   
      <div className="card" style={{ width: '18rem' }}>
        <img src={job.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{job.name}</h5>
        </div>
      </div>
    
  );
}

export default Cards;
