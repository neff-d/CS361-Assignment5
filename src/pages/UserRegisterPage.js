import React from 'react';


function UserRegisterPage({stores}) {
    return(
        <>
            <h2>New User Registration</h2>
            <form>
                <p></p>
                <p><i><b>*</b> indicates a required field</i></p>
                <label for="firstName">*First name:  </label>
                    <input type="text" id="firstName" name="firstName" required="true" />
                <p></p>
                <label for="middleInit">Middle Initial:  </label>
                    <input type="text" id="middleInit" name="middleInit" size="2" />
                <p></p>
                <label for="lastName">*Last name:  </label>
                    <input type="text" id="lastName" name="lastName" required="true" />
                <p></p>
                <label for="address1">*Address (line 1):  </label>
                    <input type="text" id="address1" name="address1" size="45" required placeholder="e.g. 123 Main st" />
                <p></p>
                <label for="address2">Address (line 2):  </label>
                    <input type="text" id="address2" name="address2" size="45"  placeholder="Apt #, Suite, etc." />
                <p></p>
                <label for="city">*City:  </label>
                    <input type="text" id="city" name="city" size="30" required="true" />
                <p></p>
                <label for="state">*State:  </label>
                    <input type="state" id="state" name="state" size="2" required="true" />
                <p></p>
                <label for="zip">*Zip code:  </label>
                    <input type="text" id="zip" name="state" size="5" required="true" />
                <p></p>
                <label for="phone">*Phone:  </label>
                    <input type="text" id="phone" name="phone" size="12" required placeholder="ex: xxx-xxx-xxxx" />
                <p></p>
                <label for="email">*Email:  </label>
                    <input type="email" id="email" name="email" size="30" required placeholder="ex: you@email.com" />
                <p></p>
                    <label for="ada">*Are you currently covered by the Americans with Disabilites Act (ADA)? </label>
                        <select name="ada" id="ada" required="true">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="unsure">I'm not sure</option>    
                        </select>                
                <p></p>
                    <label for="work">*Has your health care professional deemed you unable to work, or recommended
                                        that you reduce your time at work? </label>
                        <select name="work" id="work" required="true">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="unsure">I'm not sure</option>
                        </select>
                <p></p>
                <label for="fixedIncome">*Are you currently residing solely on a fixed monthly income? </label>
                        <select name="fixedIncome" id="fixedIncome" required="true">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="unsure">I'm not sure</option>    
                        </select>                
                <p></p>
                <label for="income">*What is your approximate monthly income?  </label>
                    <input type="text" id="income" name="income" size="12" required placeholder="ex: $XXXX.xx" />
                <p></p>
                <p>Please enter any additional comments or disclosures that you would like to make known:</p>
                    <textarea name="message" rows="10" cols="100">
                    </textarea>
                <p></p>
                <input type="checkbox" id="certify" name="certify" required="true" />
                <label for="certify">I certify that I have answered the questions in this application truthfully and to the best of my ability.
                                     I understand that the Community Resource Assistance Network will contact me once my eligbility has
                                     been determined.</label>
                <p></p>    
                <button>Submit Application</button>
                <p></p>
            </form>
        </>
    );
};

export default UserRegisterPage;