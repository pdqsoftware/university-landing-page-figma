import React from 'react'

import FeaturedEvents from './FeaturedEvents'

class UpcomingEvents extends React.Component {
    render() {
        return (
            <section className="upcoming-events">
                <div >
                    <div className="upcoming-events_title">
                        Upcoming Events
                    </div>
                    <div className="upcoming-events_button">
                        <a href="#" className="button button_black">View all events</a>
                    </div>
                </div>

                <FeaturedEvents 
                    imageHome = { this.props.imageHome }
                    featureText = { this.props.featureText }
                    featureDates = { this.props.featureDates }
                />
    
            </section>
        )
     } 
 }

 export default UpcomingEvents