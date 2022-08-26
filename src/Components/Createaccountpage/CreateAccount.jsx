import React from "react";
import { Button } from "react-bootstrap";
import "./CreateAccount.css";
function CreateAccount() {
    return (
        <div>
            <hr />
            <h1 className="text-start text-uppercase mx-5 accounthead ">
                CREATE AN ACCOUNT
            </h1>
            <hr />
            <div className="row mx-5 my-5  ">
                <div className="col-lg-4">
                    <form>
                        <p className="text-start">Sign up for a free account at Ella Boutique.</p>
                        <div class="mb-3 text-start">
                            <label for="FirstName" class="form-label ">
                                First Name:
                            </label>
                            <input
                                type="text"
                                class="form-control crainput"
                                id="FirstName"
                                aria-describedby="FirstName"
                            />
                        </div>
                        <div class="mb-3 text-start">
                            <label for="LastName" class="form-label">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                class="form-control crainput"
                                id="LastName"
                                aria-describedby="LastName"
                            />
                        </div>
                        <div class="mb-3 text-start">
                            <label for="EmailAddress" class="form-label">
                                Your Email Address:
                            </label>
                            <input
                                type="email"
                                class="form-control crainput"
                                id="EmailAddress"
                                aria-describedby="EmailHelp"
                            />
                        </div>
                        <div class="mb-3 text-start">
                            <label for="exampleInputPassword1" class="form-label">
                                Your Password:
                            </label>
                            <input
                                type="password"
                                class="form-control crainput"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <Button to='./Createaccountmain' className="offcanvasbtn2 w-100">Create Account</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
