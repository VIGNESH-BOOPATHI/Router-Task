import React, { useEffect, useState } from 'react';
import Cards from './Cards';

function CyberSecurity() {
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

    var jobsF=jobs.filter((job)=>job.id%4==0);

  return (
    <div className='container'>
    <div className='row'>
        <h1>Cyber Security</h1>
        <hr></hr>

        {jobsF.map((job, index) => (
             <div className={`col-md-6 ${jobsF.length <= 2 ? 'col-lg-6' : 'col-lg-4'} mb-3`}>
            <Cards key={index} job={job} />
            </div>
        ))}
    </div>
</div>
  )
}

export default CyberSecurity
