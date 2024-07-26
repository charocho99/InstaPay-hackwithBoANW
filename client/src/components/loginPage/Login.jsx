// src/Login.jsx
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-main">
        <div className="login-header">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram"
            className="login-logo"
          />
        </div>
        <div className="login-container">
          <form className="login-form">
            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button className='login-button' type="submit">Log In</button>
          </form>
          <div className="login-divider">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line"></div>
          </div>
          <button className="login-facebook">Log in with Facebook</button>
          <a href="#" className="forgot-password">Forgot password?</a>
          <div className="signup-container">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
        <div className="get-the-app">
          <p>Get the app</p>
          <div className="app-links">
            <a href="#">
              <img
                src="data:image/png;base64,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"
                alt="App Store"
                className="app-store"
              />
            </a>
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATEAAAClCAMAAAADOzq7AAABdFBMVEX///8AAACNjIyxsbHFxMTW1tZERETPz89ISEh3d3eRzr38/Pzp6enh4eFrpbnd3d1jnLeoqKhqamrx8fGYmJhzrruCvbyGw71wcHBZlLU+Pj5KhLRQjLT2znmhoaHu7u53tLzNSUtUVFS5ubkrKyuDg4NcXFxkZGRNTU3JyclCe67I3qI5OTnP4J+Tk5PY5p3HSlMgICC51qXytX70vn3TSUK0SmsnJyccHBz4xnu+SmAQEBAxcqysz6bxroDj0pONyr2kSXwiNk1RepRrj4wfY6iUvrFfcWsraal1p6yZyq5WYlmOsZycxK6CnIl7iXcGAAuKsqtteWnA3quyyqKmtoyeb1fyon6BaUvksnlwWUDh6ptXSDbIq2wsJhzn2JPkg2H303b/43zljl+MfFDQuWvJPU/VPDPumlp/LS+2OWOTPDa7SmOuSk44JieySm1RLi1lNDt/RFWjPnqTTG+RqK2WOYVKMD2VTYZlPmAIEAAxFilR1Iu0AAAK9ElEQVR4nO2c/WPTxhmAz5Zl2UiKI1sEY4gcIn9SY2qgEHBSQtdlQJtuHWVfLdug3drRbtmg6drtn9+9d6fTybFjK5bixXmfH4KRT/Lp0X28ujuJEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARB4lDPedllo6+VUvOV62SWk4FrpuHLzi/6xFJk2E1eWG7RJ5UyXtLCuos+o9TRkhVmLfp8ToFkO4DNRZ/OKVBIUpix6LM5FYwEjbUXfTKnQjU5Yeaiz+V02ErOWOnkuch3eifdtXbyXU+IlZgx/4Q5GGoQS1tF+rFITIAeSnwyg8axSi9IQ2wzzWGwr1ehu9az8LEsep7qPJduFpJryLSTZaBHT7qUoxfOY8YsSt3JVCsW3VS36iImLhM706DbKoT+kVGMDbvaPA6kxiqwrUpTpkpu0cZsYkO9asL+xUh/WyE1+bksPDggNsx7pUD/aZuwkRpj5pbeWJWYA/YB/o4aK8jPoTFHbusFEWCT0HpaJhWTZM+BMV/dr0hK7XK5XOVla5qxrHRTIS2aQm8SusfSG9OhXJR1wzD0BjXGcdlX04w58sa/RIoshUGbsqU3ZoCeLDtAjxqraz6lzL6aZsyTd/62MJYxSa617MYcotM2LJ+nXWYvZjtW5p1jhoYdtI9gKVo0yFl2YzVCmuxDfGM0gSPOwQ5SwADWkhujDohWy7RoXAjtmN5qt9tlbmqqMdrs5QqZTbprR6YoLb8xUMYoQ5jA4S16hYRTBlUx+BYxJtPDGECZpxieA2OZnqPbRh8+bWocXk8dLbxl7Pi8/yxqVXXXgWuU+K6ZgsZTtMS/qfF/YOyMgcbigsbigsbigsbigsbigsbigsbikoaxD3724b0FnlLKpGBs+PjnK5c+HB73q2eZNMrYY6psb+8XCzqjYdbxPKeY2vHTMLZNlT15+nTvo7iZGSZQMLNsPlGf/0CTSMnY9mOq7OnHhWN+OcqgmbNMQkzL8OZd8ALz/CmuaEjFGPD4yf7+/tOPZ5ux7tFs6G6x3HRseqSKszXPKcFsweyXKpPJV2Kte0vNGFW283RnZ+eTwfRMuHTvIFmHrdDKxjmHEWIbi1eH0zB2fXv7+vb169tPdhi//NWUPBjRWgQjz9WJiadzFo0FfHoLjN269etjs0CFtSIb/PnW7p1BY1eorCvA9b1bjGefHdNtesH8ZMDAmK/tP4vGOFevXr2y90w4ez5pmX+eBJNoSXE2jV0N2Hvn1rN3GM/Hd5tdoi4+OULV10uGH2nWam63VMq5kcMNOu0qo9iKGNvU6O6emvSeS4Pbhqdbdk5EudIYTWxZusZKeN5tqsfPhj+XhjEh6zJwdf8GF3bjxo3nY4KGe4SQyU+ZZE3iuw6NSSsy/zWdlBwXst2Vh8ta8nEOv6EY69ik6xmRvGUK1I9DA7863cXqqMa6sBU2s0lTmA2UtJQVmOkYuxywunqZKrvBufnwN0ecNAkxJ0b6upiH6xO5oK9JTNZN9KhGk6uuWaQ5HMJMnM5uGqSxJrEgZumY6nLAPOn6RIe+uW3zxUHCmEVsduRqhc3f+eo8X06pB2kYC3UBl/dvgi3Kw9++//7vRqT4hNQnCbPlFLkbHJ/aEM/xDOAOAYZIeibvajeJeAQjMFYmhCeFpWUyfKHtJumLz13WhHJjrpznHJqkyNZayYxsERJGlWkYW5W2VldXVlZW9z+/GQi7ffv3f4hY0Scbc5SKATeLLbbCQpYWKFRgtBScKkwVVxVjpswSUZbO59Xw2IJumhvTiaz4HivaRzakaSy0xdkBZQ/B1+07d+6/+ELRYk00tqU+hAIWdJbbsBOoE2gCW/JpqAHhH4WxbJC2pRPLlW1epGdswk/wLY2ebByKbCltOfz5ihogpmFsRZF1EVj57HMu7A4Vdv/++os/yrS0LTHH30W6kREIaNq3oLCEeYcy5cDfoADofAWBMKbztNk66aoBcl5dDUMrYONodCEWH0tP0SVpqRiL6Lp4cWPj4s6fRAGjvtbXX67LGyfoyaIRv/KNHvkfadPypHSsHQIpcmFRdCLGKnSHhkYqbvSCRIzRC9ZWjQ1qnU4nn+XG3OBSKPUzJWMXFVtUF9D/syhg6yDs5StZyBwyaYbAiqw5gZvNJjRd4R3olgk1Gp5GE81dP1Ir6V/f8Y5cjaixLpURGCv4MkbhC9wJYRW1F324Iw1jG1FbGxtr7nvvfSkL2KtXr76SadskGvP3cpU6rFDXWTMVbi8GxpRRjToULxgNc6TVVmjMHP+IwURjtNe2nCal6AhjPo8ptGiInZqxDalrjQq7RpVxX1TYC7WeVCIWqoavedAxDqEdUpang9lNCBOUXstmXSCk7on/BxEIGLPHP/gTNabT3oEby7H1WDwTwlieX0tCIvM8qRhTba2tXfKuvXuNKvvmJStgf4neLUF1G4lhDdZ/Qn0NLy4UJVgcplqw2D08jcf4uv6cyIIwppGxw2z5I88MMGMd5V5UPnZiQ2/bHHnQNg1ja6EtJuyv7zJjX39JC9j6F5kRoJBFH4wxWAtWI2p97bM6Bu1/Vd0Trn4DttqGDEyFMYhoSeYIEWMt+AVmLKtsLgb5YR+skbGnlIytSV9U2ANh7OtvXn6VOQLUt+izmdwYy1pT2TbgFmSU1JIN2Fa5mAv7iSCChcHco+sV82p3a8BlEMbCkmTJK2iSXmf00eQ0jF0KZFF2mTBh7G9HfWXE2kxbaSuEMRaDifpKVbGRBrWqllQfyr1DYKynHrcRHD9PwvqXZd0sM9YOq3s3LPMecfxIaJGesUuc3V3v9YMHoox9O+mOmz/k6civA2MNaKFqQpjItyaVdSN1Gc7DCA/H9LbYcf1qrVbsyhaR1kpbDGF6vKHjLX+d2CxIKVZIP7zFpO3maPeRijFha3f3wuHru99xY98eMz804LnQvWK73NRo0FASo7I+ePC8EinJXrNKW6+K5vnh/TSjAQfgetmEpVXKs1ENQVhOoB2Dx+U0eHkFO0SBGavB6I9Ov7F6jbD9y5HIUuX0jO0yXRcuOK/vcmN//8dkX+yEXV2Ej1a3r7S0w6ZvGF038t6RttM1DHUFcS/rl2y+N9ytt1uUNo9qy75eKuXUesVa/iYkN3P8MvQMJmUI43BEh9LZNYIhgM5IaJGSsQvMFhN2cPfu3QcPvvvn8b44W7Va7wST4mV69rl+udOCkFcdBhxP0FfWZlpMMxpaZFIyJjg8OGDG/jX76cfHD7sCNjA7LX0+1jsTrKM3vSkaO3wLxg7e/CdGDmOjqTNR2gzP98cy1h7z1pP0jB2+ffTo4OBNuquielFHtjpYOp5YxuzR0CKTojEQ9ujNDEsI5qIZffeNOy7KjzKzsULjnj9utDMtY4dvf3z0/ZQOMgHcaBnrT596LMw6O8nWzIzpSFIydvjDj9//e7aczQXcYilxWWnC6KTCsDXjK9L6uVx/3PbkjIWDUUzYT7Pla16gJMgRCufYyeKESM5YeM/y6eEPP6XaQSo0IOy03c1Go9a05lpENSvJvehOaU/+e1q+APZeFZYBbWr4mgR2YsYW926oTrHv9otxFqfMQ4Lvnzwf7x9rJSfsfLzjLsGGn5yP9ygm+lbA8/CuzgTfPsZZ9vfBsinBZFnqdw5nOkmXMIZ/Wr38qbOZaKOvsozvTs863cr0M0cQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQJOR/33M/sv5nsy4AAAAASUVORK5CYII="
                alt="Google Play"
                className="google-play"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
        <a href="https://about.meta.com/">Meta</a>
                <a href="https://about.instagram.com/">About</a>
                <a href="https://about.instagram.com/blog/">Blog</a>
                <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                <a href="https://help.instagram.com/">Help</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
                <a href="https://www.instagram.com/legal/terms/">Terms</a>
                <a href="https://www.instagram.com/directory/profiles/">Top Accounts</a>
                <a href="https://www.instagram.com/explore/locations/">Location</a>
                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
                <a href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
        </p>
        <p>© 2024 Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default Login;