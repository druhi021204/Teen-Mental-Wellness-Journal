import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
// import {goalimg} from '../pictures/goals.jpg'

document.body.style = "background: #e2e8f0";
const HomeAfter = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user && (
        <div className="pt-24 flex justify-center m-14">
          {/* <h1>WELCOME {user.username}</h1> */}
          {/* <h5>Your Path to Prosperity Starts Here </h5> */}
          <div className="h-full w-5/6 bg-white rounded-3xl p-10">
            <div className="h-full">
              <div className="flex justify-center w-full">
                <div className="bg-slate-100 h-1/3 w-1/3 flex justify-center p-20 rounded-2xl m-10">
                  <p>Mood Tracking</p>
                </div>
                <div className="h-1/3 w-1/3 pt-20 ">
                  <p>Track your Moods, emotions and stress Levels</p>
                </div>
              </div>

              <a href="/exercise">
                <div className="flex justify-center w-full">
                <div className="bg-slate-100 h-1/3 w-1/3 flex justify-center p-20 rounded-2xl m-10">
                    <p>Mindfulness Exercise</p>
                  </div>
                  <div className="h-1/3 w-1/3 pt-20 ">
                    <p>
                      View the Relaxation exercises to help teenagers manage
                      stress and anixety
                    </p>
                  </div>
                </div>
              </a>
              <a href="/goals">
                <div className="flex justify-center w-full">
                <div className="bg-slate-100 h-1/3 w-1/3 flex justify-center p-20 rounded-2xl m-10">
                    <p>Goal Setting</p>
                  </div>
                  <div className="h-1/3 w-1/3 pt-20 ">
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
};

export default HomeAfter;
