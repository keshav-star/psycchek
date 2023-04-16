import React, { useState } from 'react'
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

        "I am a confident person",
        "Compared to my friends, i consider myself quite a brave person",
        "I would like to be as happy as others are",
        "I feel tired or fatigued at end of day?",
        "I feel less and less energetic each day?",
        "I blush no more than others do",
        "My hands are usually quite warm",
        "I am no more shy than others",
        "I rearely have heart palpitations",
        "I am getting annoyed or irritated on simple things?",
        "I am having trust issues with everyone around me?",
        "I feel been left alone by people again and again?",
        "I am feeling uninterested in things I felt were important before?",
        "I feel it hard to express yourself to people a lot?",
        "Are you getting talkative than before?",
        "I am usually calm and not easy to put me out of temper",
        // "I often have constipations",
        "I had to experience fear in those cases when i knew for sure that nothing threatened me",
        "I am very worried about possible futures",
        "I have extremely restless and interrupted sleep",
        "I notice that my hands begin to tremble when i try to do something",
        "I often have nighmares",
        // "It sometimes seems to me that such difficulties are heaped up in front of me that i cannot overcome",
        "I feel joy in my life has left no meaning?",
        "I don't have courage to endure all the difficulties ahead",
        "My stomach troubles me alot",
        "I have periods of such anxiety that i cannot sit still",
        "It sometimes seems to me that i am good for nothing",
        "I lack self-confidence",
        " I usuallly feel quite happy",
        "I get tired faster  than the people around me",
        "I often have headaches",
        "It is difficult for me concentrate on work or any other task",
        "I work with a lot of pressure",
        "I get confused easily",
        "I feel anxiety about something or someone all the time",
        "I tend to take everything too seriously",
        // "I often cry",
        // "I often suffer from bouts of vomitting and suffering",
        "I have indigestion once a month or more",
        // "I am often afraid that i am about to blush",
        // "It is very difficult for me to focus on anything",
        "My financial situation worries me a lot",
        "I often think about things that i would not want to talk about with anyone",
        "I had periods when anxiety deprived me of sleep",
        "I sweat a lot at times when i am confused, which makes me so embarassed",
        "I sweat easily even on cold days",
        "I sometimes get so excited that its hard for me to sleep",
        "I am an easily excitable person",
        "I sometimes feel completely useless",
        "It sometimes seems to me that my nerves are very shattered and i am about to lose my temper",
        "I often find myself worrying about something",
        // "I am much more sensitive than most other people",
        "I feel hungry almost all the time",
        "Waiting makes me nervous",
        "Life for me is associated with unsual stress",
        "I am often overcome by despair"
    ];

    const [widofbar, setwidofbar] = useState(0)

    // let barwid = document.getElementById("bar")
    // barwid.style.width = qn*2

    return (
        <div className="quiz-box">
            {showResult ?
                <div className="result">

                    {score > 40 ?
                        <div className='box-2 fs-5 '>
                            <span className='text-warning'>You Need a Doctor</span>
                            <p>Your score indicates a very high level of anxiety. your daily life is accompanied by an indefinite expectation of something bad and an unaccountable fear. It is difficult for you to achieve success in your career,personal life,in relationships with people. You often experience physical manifestations of anxiety:dizziness,dry nouth,increased sewating,rapid heartbeat,nausea,and headache.</p>
                            <p className='text-info'>Please Fill this form to take an appointment
                            </p>
                            <LinkContainer to="/appointment">
                                <Button variant="outline-warning" className='aptbutton'>
                                    Click Here
                                </Button>
                            </LinkContainer>
                        </div> :
                        score > 30 ?
                            <div className="box-2 fs-5">
                                <p>
                                    Your score indicates a high level of anxiety. You probably worry a lot and often, and your reaction to various situations is more vivid and intense than most people. Because of this, you rarely manage to relax, you do not see anything good even in positive moments. You often become restless, fussy, and irritable.
                                </p>
                                <p>You can make an appointment if you feel to see a doctor
                                </p>
                                <LinkContainer to="/appointment">
                                    <Button variant="outline-warning" className='aptbutton'>
                                        Click Here
                                    </Button>
                                </LinkContainer>
                                <Button variant="warning" className='restartButton' onClick={restart}>restart</Button>
                            </div>
                            :
                            score > 15 ?
                                <div className="box-2 fs-5">
                                    Your score indicates an average (with a tendency to high) level of anxiety. Your anxiety can be excessive, because of which you can feel not only emotional tension but also pain in the body. Most likely, in a moment of anxiety, you feel the burden of responsibility and obligation, and this is what winds you up the most. <br /><br />
                                    <Button variant="outline-warning" className='restartButton' onClick={restart}>restart</Button>
                                </div>
                                :
                                <div className="box-2 fs-5">
                                    <p>
                                        It indicates a low level of anxiety. You usually do not feel the tension in life, you are rarely overcome by despair. You quickly adapt to a new team and easily perceive any changes at work/study. You are almost never overwhelmed by the fear of the unknown future, the fear of loneliness, etc.
                                    </p>
                                    <Button variant="outline-info" className='restartButton' onClick={restart}>restart</Button>
                                    {/* <h2>Please Follow these tips to Calm yourself And you will be fine</h2>
                                    <p>Take Deep breath</p>
                                    <p>Drink some water</p>
                                    <p>Talk with someone important</p>
                                    <p>Give yourself a break to tour </p>
                                    <p> visit to a calm place like temple etc.</p> */}
                                </div>

                    }


                </div> :
                <div className="box-2">
                    <h2 className='qn-toll'>{qn + 1}/{qns.length} Answered </h2>
                    <div className="w3-light-grey w3-large position-relative">
                        <div className="w3-container w3-green" style={{ width: `${widofbar}%`, height: "20px" }}>
                        </div>
                    </div>
                    <div className="qn-card">
                        <div className="qn"><span className='float-start'>{qn + 1}.</span> {qns[qn]}</div>
                        <div className='ans'>
                            <button className='px-4 rounded me-4' onClick={() => {
                                optClicked(1);
                                setwidofbar(qn * 2)
                            }}>YES</button>
                            <button className='px-4 rounded me-4' onClick={() => {
                                optClicked(0);
                                setwidofbar(qn * 2)
                            }}>NO</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

// let styles=(StyleSheet)=>{}