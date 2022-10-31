import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputhasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetInputFirstName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputhasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetInputLastName
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmailId,
    isValid: enteredEmailIdIsValid,
    hasError: emailInputhasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetInputemail
  } = useInput(value => value.trim() !== "");
  

  let formIsValid = false;
  
    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIdIsValid){
      formIsValid = true;
    }
const formSubmitHandler = (event) => {
  event.preventDefault();
  if (!formIsValid) {
    return;
  }
  
  resetInputFirstName("");
  resetInputLastName("");
  resetInputemail("");
  console.log("submitted");
  console.log(enteredFirstName, enteredLastName, enteredEmailId);
}

const nameInputClasses = firstNameInputhasError
    ? "form-control invalid"
    : "form-control";
    const lastNameInputClasses = lastNameInputhasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInputhasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name' >First Name</label>
          <input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={enteredFirstName}/>
          {firstNameInputhasError && (<p className="error-text">Please enter a firstName</p> )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'  onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={enteredLastName}/>
          {lastNameInputhasError && (<p className="error-text">Please enter a LastName</p> )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmailId}/>
        {emailInputhasError && (<p className="error-text">Please enter a email</p> )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
