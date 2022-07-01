import styles from './../../styles/index.module.scss';
import react, { Component} from 'react';
import { render } from 'react-dom';
class contactForm extends Component  {
    
    constructor(props){
        super(props);
        this.state = {
            
            fname: '',
            lname: '',
            email: '',
            serviceType: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleChange(e) {
        this.setState({ value: e.target.value });
        console.log(this.state.value)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.handleSend;
    }
    //todo HOW TO SEND TO EMAIL
    //todo How to save the data to the correct variable
    handleSend() {
        let fname = this.state.fname;
        let lname = this.state.lname;
        let email = this.state.email;
        let serviceType = this.state.serviceType;
        let message = this.state.message;
        alert(fname);
    }

    render(props){
    return (
        <form className={styles.contactForm}  onClick={this.handleSubmit}>
            <div className={styles.dataBox}>
                <fieldset>
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange} placeholder="Jane"></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange}   placeholder="Smoe"></input>
                </fieldset>
                
            </div>

            <div className={styles.dataBox}>
                <fieldset className={styles.emailBox}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="12345@youremail.com"></input>
                </fieldset>
            </div>

            <div className={styles.dataBox}>
                <fieldset>
                    <p>How can I help you?</p>
                    <select id='serviceType' className={styles.serviceType} value={this.state.serviceType} onChange={this.handleChange}>
                        <option className={styles.optionsItem}>Consultation</option>
                        <option className={styles.optionsItem}>Website</option>
                        <option className={styles.optionsItem}>App</option>
                        <option className={styles.optionsItem}>Repair</option>
                    </select>
                </fieldset>
            </div>

            <div className={styles.msgBox}>
                <textarea className={styles.contactMsgBox}  id="message" value={this.state.message} onChange={this.handleChange} placeholder='What would you like me to create and how soon do you need it done? What is the best way to contact you? '></textarea><br/>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.formBtn}>SEND</button>
            </div>
        </form>
    )
}
}

export default contactForm;