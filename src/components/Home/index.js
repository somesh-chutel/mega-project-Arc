import Header from "../Header";
import PersonDetails from "../PersonDetails";
import "./index.css";

const personlist = [
    {name:"somesh",age:26,position:"Full Stack Developer"},
    {name:"Ajay",age:36,position:"FrontEnd Developer"},
    {name:"Vijay",age:21,position:"Backend Developer"},
    {name:"Rahul",age:28,position:"Java Developer"},
    {name:"Manish",age:29,position:"MERN Stack Developer"}
  ]

const Home = ()=>{ 
    
    return(
    <>
        <Header/>
        <ul className="mt-3">

            {personlist.map(each=>  
                <PersonDetails userDetails={each}/>
                )}

        </ul>
    </>
)

    }


export default Home;