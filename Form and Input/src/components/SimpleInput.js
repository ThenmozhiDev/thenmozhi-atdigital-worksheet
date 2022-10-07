
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputhasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetInputName
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
  
    if(enteredNameIsValid && enteredEmailIdIsValid){
      formIsValid = true;
    }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    //setEnteredEmailTouched(true);
    if(!enteredEmailIdIsValid) {
      return;
    }
    console.log(enteredName, enteredEmailId);
resetInputName("");
resetInputemail("");
  };

  const nameInputClasses = nameInputhasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInputhasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputhasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Email Id</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailId}
        />
        {emailInputhasError && (
          <p className="error-text">Email ID must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
