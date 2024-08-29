const USER_INFO_KEY = 'userInfo'

// assigning user info as data from local storage or using default info if no local data exists
let userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY)) || { name: "", email: "", number: "" }

// grabbing local info
export const getUserInfo = () => userInfo;

// setting new local storage user info
export const setUserInfo = (newInfo) => {
    userInfo = newInfo;
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}




const USER_PLANS_KEY = 'userPlans'

// setting default plan
const selectedPlan = {   
    name: "Default",
    price: 999,
    src: ""
}

// setting user plan as data from local storage or use default plan is no plan exists
let userPlan = JSON.parse(localStorage.getItem(USER_PLANS_KEY)) || { selectedPlan, subType: false }

// grabbing local plan
export const getUserPlan = () => userPlan;


// setting new user plan 
export const setUserPlan = (newPlan) => {
    userPlan = newPlan;
    localStorage.setItem(USER_PLANS_KEY, JSON.stringify(userPlan))
}




const USER_ADDONS_KEY = 'userAddOns'


// grabbing user add ons as data from local storage or assign as empty
let userAddOns = JSON.parse(localStorage.getItem(USER_ADDONS_KEY)) || {};

// grabbing user add ons
export const getUserAddOns = () => userAddOns;


// setting new add on package
export const setUserAddOns = (newAddOns) => {
    userAddOns = newAddOns;
    localStorage.setItem(USER_ADDONS_KEY, JSON.stringify(userAddOns));
};



