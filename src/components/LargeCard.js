import React from 'react'

class LargeCard extends React.Component {
    render() {
        const cardTop = "largecard-image__" + this.props.cardImage
        const largeCard = "largecard__" + this.props.cardImage
        const cardOverlay = "largecard-overlay__" + this.props.cardImage
        const cardOverlayTitle = cardOverlay + "-title"
        const arrow = "largecard-overlay__" + this.props.cardImage + "-arrow"
        return (
            <div className={ largeCard }>
                <div className={ cardTop }></div>
                <div className="largecard-bottom">
                    <div className={ cardOverlay }>
                        <div className={ cardOverlayTitle }>
                            { this.props.cardTitle }
                        </div>
                        <img src="images/arrow-right.svg" alt="Arrow right" className={ arrow }/>
                        <div className="largecard-overlay_content">{ this.props.cardText }</div>
                    </div>
                </div>
            </div>
        )
     } 
 }

 export default LargeCard
