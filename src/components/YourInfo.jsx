

import styles from '../styles/YourInfo.module.css'



const YourInfo = ( required, personalInfo, updatePersonalInfo ) => {

  const handleChange = (e) => {
    const { name, value } = e.target


    updatePersonalInfo(name, value);
  }

  return (
    <>

    <div className={styles.input_container}>
      
      <div className={styles.label_warning}>
        <label>Name</label>
        <p>This field is required</p>
      </div>

      <input placeholder='' value={personalInfo.name} onChange={handleChange}
      name='name' type='text' aria-label='Enter Name' required/>
    </div>

    <div className={styles.input_container}>
      
      <div className={styles.label_warning}>
        <label>Email</label>
        <p>This field is required</p>
      </div>

      <input placeholder='' value={personalInfo.email} onChange={handleChange}
      name='email' type='email' aria-label='Enter Email' required/>
    </div>

    <div className={styles.input_container}>

      <div className={styles.label_warning}>
        <label>Phone Number</label>
        <p>This field is required</p>
      </div>

      <input placeholder='' value={personalInfo.number} onChange={handleChange}
      name='number' type='text' aria-label='Enter Phone Number' required/>
    </div>

    </>
  )
}

export default YourInfo