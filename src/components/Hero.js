import React from 'react'

class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-home">
                    <a href="#" className="button button_black button_underline">Home</a>
                </div>
                {/* <div className="hero-text"> */}
                    <div className="hero-text_title">
                        Student Life
                        {/* <h1>Student Life</h1> */}
                    </div>
                    <div className="hero-text_summary">
                        {/* <h3>There is so much going on at Ludlow University, both on and off campus. </h3> */}
                        There is so much going on at Ludlow University, both on and off campus.
                    </div>
                    <div className="hero-text_person">
                        {/* <h4>Lisa Smith</h4> */}
                        Lisa Smith

                    </div>
                    <div className="hero-text_person__title">
                        Student, BSc (Hons) Computer Games Design
                    </div>

                    <div className="hero-text_button">
                        <a href="#" className="button hero-text_button__text">View student stories</a>
                        {/* <div className="button hero-text_button__text">View student stories</div> */}
                    </div>
                {/* </div> */}
                
                <div className="hero-image">
                    <img src="images/hero.png" alt="Female student closeup" className="hero-image_image" />
                </div>
            </section>
        )
     } 
 }

 export default Hero