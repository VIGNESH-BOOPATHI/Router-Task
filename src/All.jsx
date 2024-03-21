import React, { useEffect, useState } from 'react';
import Cards from './Cards';

function All() {
    const [jobs, setJobs] = useState([]);

    // Function to fetch data from the API
    const getData = async () => {
        try {
            // Fetch data from the API endpoint
            const jobData = await fetch(
                "https://65f99ab73909a9a65b18e80d.mockapi.io/Myproject/router-task",
                { method: "GET" } // Corrected method spelling
            );
            // Check if fetching data is successful
            if (!jobData.ok) {
                throw new Error('Failed to fetch data');
            }
            // Parse response data to JSON format
            const jobresp = await jobData.json();
            // Set the state with the fetched data
            setJobs(jobresp);
        } catch (error) {
            // Log error if fetching data fails
            console.error("Error fetching data:", error);
        }
    };

    // Fetch data when component mounts
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <h1>All</h1>
                <hr></hr>
                {/* Iterate over fetched jobs and display them */}
                {jobs.map((job, index) => (
                    <div className={`col-md-6 ${jobs.length <= 2 ? 'col-lg-6' : 'col-lg-4'} mb-3`} key={index}>
                        <Cards job={job} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default All;
