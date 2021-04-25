import React from 'react'

class FeatureBanner
 extends React.Component {
    render() {
        return (
            <section className="feature-banner">
                <div className="feature-banner_breaker"></div>
                <div className="feature-banner__title">
                    <div className="feature-banner_text">
                        Come along to one of our Open Days and find out everything you need to know about the campus, courses, and facilities
                    </div>
                </div>
                <div className="feature-banner_button">
                    <a href="#" className="button feature-banner_button-text">Book an Open Day</a>
                </div>
            </section>
        )
     } 
 }

 export default FeatureBanner
