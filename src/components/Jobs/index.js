import { useEffect, useState } from 'react';
import Header from '../Header';
import DisplayJobs from '../DisplayJobs';
import './index.css';


const Jobs = ()=>{
    const [allValues,setvalue] = useState({
        jobsList:[]
    });

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
              if(response.ok===true){
                setvalue({...allValues,jobsList:data.jobs})
              }
              console.log(data.jobs);
        }

        displayAllJobs();

    },[])

    

    return (

        <>
            <Header/>
            <div className='all-jobs-sec'>
            <div className='filter-sec'>

            </div>
            <div className='jobs-list-cont'>
                <ul>
                    {allValues.jobsList.map(each=> 
                            <DisplayJobs jobsData={each} key={each.id}/>
                        )}
                </ul>
            </div>
            </div>
        </>
    )
}


export default Jobs;