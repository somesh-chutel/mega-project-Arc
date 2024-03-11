import './index.css'


const PersonDetails = (props)=>{

    const {userDetails} = props;

    const {name,age,position} = userDetails;

    return(
        <div className='container'>
            <li className='card bg-primary mb-2 p-2'>

                <h1>{name}</h1>
                <h4>{age}</h4>
                <p>{position}</p>

            </li>
        
        </div>
    )
}



export default PersonDetails;