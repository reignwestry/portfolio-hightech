import styles from './../../styles/index.module.scss';
import react, { Component} from 'react';
import { render } from 'react-dom';

//# static data
const MsgPlaceholder = `What would you like me to create and how soon do you need it done? What is the best way to contact you? `;
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

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    inputChange(e) {
        // this.setState({ value: e.target.value });
        // console.log(this.state.value)
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(`${name}: ` + value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleSend;
        // this.handleChange(e);
        console.log(`form submitted`)
        this.handleSend();
    }

    // handleSend() {
        // let fname = this.state.fname;
        // let lname = this.state.lname;
        // let email = this.state.email;
        // let serviceType = this.state.serviceType;
        // let message = this.state.message;
        // console.log(fname, lname, email, serviceType, message);
    // }

    render(props){
    return (
        <form className={styles.contactForm}  onSubmit={this.handleSubmit}>
            <div className={styles.dataBox}>
                <fieldset>
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.inputChange} placeholder="Jane"></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="lname">Last Name</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.value} placeholder="Smoe"></input>
                </fieldset>
                
            </div>

            <div className={styles.dataBox}>
                <fieldset className={styles.emailBox}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" placeholder="12345@youremail.com" value={this.state.value}  ></input>
                </fieldset>
            </div>

            <div className={styles.dataBox}>
                <fieldset>
                    <p>How can I help you?</p>
                    <select id='serviceType' className={styles.serviceType}  value={this.state.value}>
                        <option className={styles.optionsItem} selected>Consultation</option>
                        <option className={styles.optionsItem}>Website</option>
                        <option className={styles.optionsItem}>App</option>
                        <option className={styles.optionsItem}>Repair</option>
                    </select>
                </fieldset>
            </div>

            <div className={styles.msgBox}>
                <textarea className={styles.contactMsgBox}  id="message"  placeholder={MsgPlaceholder} value={this.state.value}></textarea><br/>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.formBtn}>SEND</button>
            </div>
        </form>
    )
}
}

export default contactForm;