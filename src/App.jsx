import { useState } from 'react'

import { steps } from './data/steps'
import { forms } from './data/forms'


import "./App.css"
import YourInfo from './components/YourInfo'


const App = () => {

    const [stepNumber, setStepNumber] = useState(1)

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        number: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if(stepNumber < 4) {
            setStepNumber(stepNumber + 1)
            return;
        }


    }


    const updatePersonalInfo = (key, value) => {
        setPersonalInfo((prevState) => ({
          ...prevState,
          [key]: value,
        }));

        console.log(personalInfo)
    };

    return (
        <main>

            <section className='form_container'>

                <ol className='steps'>

                    {steps.map(step => (
                        <li className='step_container' key={step.number}>

                            <div className={step.number !== stepNumber ? "step_number_unselected" : "step_number"}>
                                <p>{step.number}</p>
                            </div>
                    
                            <div className='step'>
                                <p>{step.step}</p>
                                <p>{step.name}</p>
                            </div>
                    
                        </li>
                    ))}

                </ol>

            
                <div className='form_content'>
                    
                    {forms.filter(form => form.step === stepNumber).map(filteredForm => (
                        <div className='form_step' key={filteredForm.step}>
                            <h1 className='form_title'>{filteredForm.title}</h1>
                            <p className='form_desc'>{filteredForm.desc}</p>
                        </div>
                    ))}

                    <form method="post" className='form' onSubmit={handleSubmit}>

                        <div className='form_inputs'>
                            {stepNumber === 1 && <YourInfo required={true} personalInfo={personalInfo} updatePersonalInfo={updatePersonalInfo}/>}
                        </div>

                        <div className='form_buttons'>

                            <button type='button' className={stepNumber > 1 ? 'back_button' : 'back_button_hidden'}
                            onClick={() => setStepNumber(stepNumber - 1)}>Go Back</button>
                            
                            {stepNumber !== 4 ? (
                                <button type="submit" className='next_button'>Next Step</button>
                            ) : (
                                <button type="submit" className='next_button'>Confirm</button>
                            )}
                        </div>

                    </form>




                </div>


            </section>

        </main>
    )
}

export default App