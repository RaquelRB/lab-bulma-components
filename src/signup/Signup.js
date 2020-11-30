import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from '../navbar/Navbar'
import FormField from '../formfield/FormField'
import CoolButton from '../coolbutton/CoolButton'

const SignUp = ()=>{
    return(
        <div className="SignUp">
        <Navbar/>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="**********"/>
        <CoolButton className="button is-dark" type="submit" title="Sign Up"/>
        </div>
    )
}
export default SignUp;