import React from "react";
import './home.css';

function HomePage() {
  return (
  <div className="bg">

    <div className="home-container">
      
      <h1 className="plans">PLAN YOUR FUTURE</h1>
      <h4 className="goal">Our goal is to help students make informed decisions about College</h4>

      <div className="box-1">
          <p><br/>It is estimated that roughly 20 to 50 % of incoming students <br/> are undecided on what they want to study</p>
          <p>Our goal is to guide you through that decision</p>
          <button><a href="#about">LEARN MORE ABOUT US!</a></button>
      </div>

      <h2 className="preparations">PREPARATIONS:</h2>
      <p className="steps">Steps you should follow</p>
      
      <div className="box-2">
        <ol>
          <a href="#box1"><li>Research!</li></a> 
          <a href="#box2"><li>Imagine what you see yourself wanting to do (what you enjoy :)</li></a>
          <a href="#box3"><li>Planning !</li></a>
          <a href="#box4"><li> Actually preparing</li></a>
        </ol>
      </div>
      </div>

      <div className="box-3" id="box1">
        <div className="box-container">
          <h3 className="text">Research</h3>
          <p className="text">Exactly What We're Helping You With Right Now !<br/>
          By using our website you will notice just how much research information you're getting<br/>
          We're always here for you<br/>
          Need more help ?</p>
          <button>Contact Us</button>
        </div>

        <div className="box-container">
        <p className="text">Details of our Research:</p>
        <button>View Details</button>
      </div>
      </div>

      <div className="box-4">
      <h2 className="text">What You Enjoy?</h2>

        <p><br/>What you usually hear people tell you <br/> is of course the one question: "But what do YOU WANT to do?" <br/>
        , and it's not uncommon to respond with "i don't know"</p>
      </div>

      <div className="box-5">
        <h2 className="text">Planning</h2>
        <p className="text">Get Started Right Now !</p>
        <button>SIGN UP</button>
      </div>
    </div>
  )
}

export default HomePage
