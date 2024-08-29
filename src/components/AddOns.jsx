import { useEffect, useState } from 'react'

import { addOns } from '../data/addons'
import { getUserAddOns, setUserAddOns } from '../data/subscription'

import Checkmark from '../assets/icon-checkmark.svg'

import addOnStyles from '../styles/AddOns.module.css'



const AddOns = () => {


    // setting add ons to get add ons hook
    const [selectedAddOn, setSelectedAddOn] = useState(getUserAddOns());


    // handling add on selection
    const handleSelection = (addOn) => {
        
        // setting state
        setSelectedAddOn(prevState => {
            // creating state copy
            const updatedState = { ...prevState };

            // if add on already exists, delete it from the array
            if (updatedState[addOn.name]) {
                delete updatedState[addOn.name];
            }
            // if it doesn't exist then add the add on to the array
            else {
                updatedState[addOn.name] = addOn;
            }

            // returning the updated state
            return updatedState;
        });
    }


    // when add ons selection changes, update local storage
    useEffect(() => {
        setUserAddOns(selectedAddOn)
    }, [selectedAddOn])

    return (
        <div className={addOnStyles.addOn_main} data-aos="fade-right">

            {addOns.map(addOn => (
                <div key={addOn.type} className={Object.keys(selectedAddOn).includes(addOn.name) ? addOnStyles.selected_container : addOnStyles.container} role='button'
                onClick={() => handleSelection(addOn)} name={addOn.type}>

                    <div className={!Object.keys(selectedAddOn).includes(addOn.name) ? addOnStyles.checkmark_unselected : addOnStyles.checkmark}>
                        <img src={Checkmark}/>
                    </div>

                    <div className={addOnStyles.name_desc}>
                        <p>{addOn.name}</p>
                        <p>{addOn.desc}</p>
                    </div>

                    <p className={addOnStyles.price}>+${addOn.price}/mo</p>
                </div>

            ))}

        </div>
    )
}

export default AddOns