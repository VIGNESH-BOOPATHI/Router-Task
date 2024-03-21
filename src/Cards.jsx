import React from 'react';

// Functional component to display individual job cards
function Cards({ job }) {
  return (
    <div>
      {/* Card container with Bootstrap styles */}
      <div className="card" style={{ width: '18rem' }}>
        {/* Image element with source from job.avatar */}
        <img src={job.avatar} className="card-img-top" alt="..." />
        {/* Card body containing job name */}
        <div className="card-body">
          <h5 className="card-title">{job.name}</h5>
        </div>
      </div>
    </div>
  );
}

// Export the Cards component
export default Cards;
