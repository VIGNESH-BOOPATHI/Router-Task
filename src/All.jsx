import React, { useEffect, useState } from 'react';
import Cards from './Cards';


function All() {
    const [jobs, setJobs] = useState([]);

    const getData = async () => {
        try {
            const jobData = await fetch(
                "https://65f99ab73909a9a65b18e80d.mockapi.io/Myproject/router-task",
                { method: "GET" } // Corrected method spelling
            );
            if (!jobData.ok) {
                throw new Error('Failed to fetch data');
            }
            const jobresp = await jobData.json();
            setJobs(jobresp);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <h1>All</h1>
                <hr></hr>
                
                {jobs.map((job, index) => (
                    <div className={`col-md-6 ${jobs.length <= 2 ? 'col-lg-6' : 'col-lg-4'} mb-3`}>
                    <Cards key={index} job={job} />
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default All;
