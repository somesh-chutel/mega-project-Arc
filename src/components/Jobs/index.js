import { useEffect } from 'react';
import Header from '../Header';
import './index.css';


const Jobs = ()=>{

    useEffect(()=>{
        const displayAllJobs = async()=>{
            const url = "https://apis.ccbp.in/jobs";
            const options = {
                method: 'GET',
                headers : {
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByYW5lZXRoYSIsInJvbGUiOiJQUklNRV9VU0VSIiwiaWF0IjoxNjIzMDY1NTMyfQ.68FuDFraHW7GplQiXVUrnsU1goYgmwd0tXNk6-HxCok"
                }
              }
    
              const response = await fetch(url,options);
              const data = await response.json();
              console.log(data.jobs);
        }

        displayAllJobs();

    })

    

    return (

        <>
            <Header/>
        </>
    )
}


export default Jobs;