import React,{useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default function Quiz() {
    const [qn, setQn] = useState(0)
    const [score, setScore] = useState(0);
    const [showResult, setResult] = useState(false);

    const optClicked = (resp) => {
        if (resp) {
            setScore(score + 1);
        }
        if (qn + 1 < qns.length) setQn(qn + 1);
        else setResult(true)
    }
    const restart = () => {
        setQn(0);
        setResult(false);
        setScore(0)
    }

    const qns = [
        "Little interest or pleasure in doing things?",
        "Do you think you are better of dead?",
        "Feeling down, depressed or hopeless?",
        "Trouble concentrating on things, such as reading the newspaper or watching television",
        "Poor appetite or overeating?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Does your head feels like there is no enjoyment in life",
        "Moving or speaking so slowly that other people could have noticed?"
    ];

    return (
        <div className="quiz">
            {showResult ?
                <div className="result">
                    
                    {score>5?
                    <div className='doc'>
                        <span>You Need a Doctor</span>
                        <p>Please Fill this form to take an appointment<LinkContainer to="/appointment">
                            <Button variant="primary" className='aptbutton'>Click Here</Button></LinkContainer></p>
                    </div>: 
                    <div className="tips">
                        <h2>Please Follow these tips to Calm yourself And you will be fine</h2>
                        <p>Take Deep breath</p>
                        <p>Drink some water</p>
                        <p>Talk with someone important</p>
                        <p>Give yourself a break to tour </p>
                        <p> visit to a calm place like temple etc.</p>
                    </div>
                    }
                    <Button variant="warning" className='restartButton' onClick={restart}>restart</Button>
                </div> :
                <div className="questions">
                    <h1>{qn + 1} of {qns.length} Answered </h1>
                    <div className="qncard">
                        <h2 className="qn">{qns[qn]}</h2>
                        <ul>
                            <li onClick={() => optClicked(1)}>Y E S</li>
                            <li onClick={() => optClicked(0)}>N O</li>
                        </ul>
                    </div>
                </div>
            }

        </div>
    )
}

// let styles=(StyleSheet)=>{}