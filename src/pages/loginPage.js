import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";

import NavBarIn from "./NavBar";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    //get id between min (inclusive) and max (inclusive)
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSubmit = () => {
        console.log("error:", error);
        if (error && Object.keys(error).length) return;
        if (localStorage.getItem("email") && localStorage.getItem("password")) {
            if (
                email === localStorage.getItem("email") &&
                password === localStorage.getItem("password")
            ) {
                toast.success("login success !");
                navigate("/post");
            } else {
                console.log("error");
            }
        } else {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            localStorage.setItem("id", randomNumberInRange(1, 10));
            navigate("/post");
        }
    };

    return (
        <div>
            <NavBarIn />
            <div class="login">
                <Formik
                    validate={() => {
                        let errors = {};
                        if (!email) {
                            errors.email = "Required";
                        } else if (!EmailValidator.validate(email)) {
                            errors.email = "Invalid email address.";
                        }

                        const passwordRegex = /(?=.*[0-9])/;
                        if (!password) {
                            errors.password = "Required";
                        } else if (password.length < 8) {
                            errors.password = "Password must be 8 characters long.";
                        } else if (!passwordRegex.test(password)) {
                            errors.password = "Invalid password. Must contain one number.";
                        }

                        return errors;

                    }}
                    onSubmit={handleSubmit}
                    initialValues={{}}
                >
                    {(props) => {
                        const {
                            touched,
                            errors,
                            isSubmitting,
                            handleBlur,
                            handleSubmit
                        } = props;
                        console.log("errors:", errors);
                        setError(errors);
                        return (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={handleBlur}
                                    className={errors.email && touched.email && "error"}
                                />
                                {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                )}

                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password && "error"}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}

                                <button
                                    class="bt-sbt"
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default LoginPage;