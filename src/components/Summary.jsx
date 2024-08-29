import { useEffect, useState } from 'react'

import { getUserAddOns, getUserPlan } from '../data/subscription'

import summaryStyles from '../styles/Summary.module.css'

const Summary = ({ handleReset }) => {


    // grabbing user add ons
    const userAddOns = getUserAddOns()
    const addOns = Object.values(userAddOns)

    // grabbing user plan
    const userPlan = getUserPlan()
    const planType = userPlan

    const [priceTotal, setPriceTotal] = useState(0)
    


    useEffect(() => {

        const calculateTotal = () => {
            
            // grabbing plan price
            const subscriptionType = planType.subType
            const planPrice = planType.selectedPlan.price;

            let addOnsPrice;
            let total = 0;


            // if only one addon, grab its price
            if (addOns.length === 1) {
                addOnsPrice = addOns[0].price;
            }
            // if several add ons then add all their prices together
            else if (addOns.length > 1) {
                addOnsPrice = addOns.reduce((total, addOn) => total + addOn.price, 0);
            }
            // if no add ons then set tis price to zero
            else {
                addOnsPrice = 0;
            }
            
            // adding plan price and add on price
            total = planPrice + addOnsPrice;
            
            // multiply by 12 for plan type 
            if(!subscriptionType) {
                total = total * 12
            }

            // setting the total price for form
            setPriceTotal(total)
        }

        calculateTotal()
    }, [planType, addOns])

    

    return (
        <div className={summaryStyles.main} data-aos="fade-right">
            <div className={summaryStyles.plans_and_addons}>

                <div className={summaryStyles.plan_container}>

                    <div className={summaryStyles.plan_type}>
                        <p>{planType.selectedPlan.name}{planType.subType ? `${"(Monthly)"}` : `${"(Yearly)"}`}</p>
                        <button type='button' aria-label='Change Plan' onClick={handleReset}>Change</button>
                    </div>

                    <p>{planType.subType ? `$${planType.selectedPlan.price}/month` : `$${planType.selectedPlan.price * 12}/year`}</p>
                </div>

                {addOns.map(addOn => (
                    <div key={addOn.name} className={summaryStyles.addOns}>
                        <p className={summaryStyles.addOn_name}>{addOn.name}</p>
                        <p className={summaryStyles.addOn_price}>{planType.subType ? `+$${addOn.price}/month` : `+$${addOn.price * 12}/year`}</p>
                    </div>
                ))}
            </div>
            <div className={summaryStyles.total}>
                <p>Total {planType.subType ? `${"(Monthly)"}` : `${"(Yearly)"}`}</p>
                <p>+{priceTotal}/{planType.subType ? "month" : "year"}</p>
            </div>
        </div>
    )
}

export default Summary