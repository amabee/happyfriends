"use client";
import { useEffect, useState } from "react";
import "../public/css/style.css";
import "../public/fonts/material-icon/css/material-design-iconic-font.min.css";
import ToastNotification from "@/components/TOASTS";
import { login } from "@/lib";

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpSwitch = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div className="main">
      {/* SIGN UP */}
      {isSignUp ? (
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label for="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="re-pass">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label for="agree-term" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in{" "}
                      <a href="#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src="images/signup-image.jpg" alt="sing up image" />
                </figure>
                <a
                  href="#"
                  className="signup-image-link"
                  onClick={handleSignUpSwitch}
                >
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="sign-in">
          {/* LOGIN */}
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src="/images/signin-image.jpg" alt="sing up image" />
                </figure>
                <a
                  href="#signup"
                  className="signup-image-link"
                  onClick={handleSignUpSwitch}
                >
                  Create an account
                </a>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label for="your_name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="your_pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label for="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                      onClick={handleLogin}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastNotification />
        </section>
      )}
    </div>
  );
}
