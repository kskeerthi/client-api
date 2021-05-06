import React, { useState } from 'react';
import LoginForm from "./components/loginForm";
import Hotels from "./components/hotels"
import HotelCard from './components/hotelcard'
import './App.css';

import { FormattedMessage } from "react-intl";

import { I18nPropvider, LOCALES } from './i18nProvider';


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const admin = {
    username: "john",
    password: "john",
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.username === admin.username &&
      details.password === admin.password
    ) {
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("Details does not match");
      setError("Details do not match");
    }
  };
  const Logout = () => {
    setUser({ username: "", password: "" });
  };

  return (
    <I18nPropvider locale={locale}>

      <div>

        {user.username !== "" ? (
          <div className="header-value">
            <div className="header-details">
              <div className="nav-align">
                <div className="welcome-message">

                </div>
                <div className="nav-profile">
                  <div className="dropdown">
                    <div className="user-details"><FormattedMessage id={user.username} /></div>
                    <div className="arrow-down"></div>
                    <div className="dropdown-content">
                      <span onClick={Logout}>Logout</span>
                    </div>

                  </div>
                  <div className="language-selection">
                    <button onClick={() => setLocale(LOCALES.ENGLISH)}>EN</button>
                    <button onClick={() => setLocale(LOCALES.FRENCH)}>FR</button>
                    <button onClick={() => setLocale(LOCALES.GERMAN)}>DE</button>
                    <button onClick={() => setLocale(LOCALES.KOREAN)}>KR</button>
                    <button onClick={() => setLocale(LOCALES.HINDI)}>IN</button>
                  </div>
                </div>
              </div>
              <div className="welcome-details">
                {/* <Trans i18nKey="header.headertitle"> Annual Developer Conference at Dusseldorf*/}
                <p className="welcome-m1"><FormattedMessage id="title1" /></p>
                {/* </Trans> */}
                <p className="welcome-m2"><FormattedMessage id="title2" /></p>

              </div>
            </div>
            <div className="content-load">
              <div className="hotel-images-content">
                <HotelCard locale={locale} />
              </div>
              <div className="maps-content">
                <div className="container">
                  <div className="map_container"></div>
                  <div className="map">
                    <Hotels />
                  </div>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="App">
            <LoginForm Login={Login} error={error} />
          </div>
        )}

      </div>
    </I18nPropvider>
  );
}

export default App;
