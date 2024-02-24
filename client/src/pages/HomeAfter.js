import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
// import {goalimg} from '../pictures/goals.jpg'

document.body.style = 'background: #e2e8f0';
const HomeAfter = () => {

    const {user} = useAuthContext();
    
    return ( 
        <div className="container">
        {user && (
            <div className="homeafter">
                {/* <h1>WELCOME {user.username}</h1> */}
                    {/* <h5>Your Path to Prosperity Starts Here </h5> */}
                    <div className=' innerbox'>
                    <div className="arrangepara">
                    {/* <p>At InvestSavvy, we understand that every investment decision is a step towards securing your financial future. So, learn about business schemes and financial planning to effecticely engage in the best investment option to shape a secure future for you and your family </p> */}
                    {/* <p>Your aspirations are our priority, and we are here to be the guardians of your financial legacy.</p> */}
                        {/* <Link to = "/mainform">
                        <button>Let's Begin</button>
                        </Link>        */}
                </div>

                <div className="activity">
                    <div className="action">
                        {/* <div className="names"> */}
                            <p>Mood Tracking</p>  
                        {/* </div>          */}
                        <div className='onpop'>
                        <p>Track your Moods, emotions and stress Levels</p>
                        </div>
                    </div>    

                    <a href="/exercise">
                    <div className="action">
                        {/* <div className="names"> */}
                            <p>Mindfulness Exercise</p>  
                        {/* </div>          */}
                        <div className='onpop'>
                        <p>View the Relaxation exercises to help teenagers manage stress and anixety</p>
                        </div>
                    </div> 
                    </a>
                    <a href="/goals">
                    <div className="action">
                        {/* <div className="names"> */}
                            <p>Goal Setting</p>  
                        {/* </div>          */}
                        <div className='onpop'>
                        <p>Set and Track Personal wellness Goals</p>
                        </div>
                    </div>  
                    </a>                   
                </div>
                    </div>
                

        </div>
        )}

</div>
     );

    
}
 
export default HomeAfter;