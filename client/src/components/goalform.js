import { useState } from "react";
import { useGoalContext } from "../hooks/useGoalContext";

const GoalForm = () => {
    const {dispatch}= useGoalContext()

    const [activities, setActivities] = useState('')
    const [duration, setDuration]=useState('')
    const [requirements, setRequirements]=useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields]=useState([])

    const handleSubmit = async (e) => {
        e.preventDefault() 

        const goal = {activities, duration, requirements}

        const response = await fetch('/api/goal/add', {
            method: 'POST',
            body: JSON.stringify(goal),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) 
        {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok)
        {
            setEmptyFields([])
            setError(null)
            setActivities('')
            setDuration('')
            setRequirements('')
            // localStorage.setItem('goal', JSON.stringify(json))
            dispatch({type: 'CREATE_GOALS', payload: json})
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Set A Goal</h3>

            <label>Activity Name:</label>
            <input 
            type="text"
            onChange={(e) => setActivities(e.target.value)}
            value={activities}
            className={emptyFields.includes('activities')? 'error': ''}
            />

            <label>Duration (in mins)
                <input 
                type="number"
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                className={emptyFields.includes('duration') ? 'error' : ''}
                />
            </label>

            <label>Prerequisite</label>
            <input 
            type="text"
            onChange={(e) => setRequirements(e.target.value)}
            value={requirements}
            className={emptyFields.includes('requirements') ? 'error' : ''}
            />

            <button>Add Goal</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default GoalForm