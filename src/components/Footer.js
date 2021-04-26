import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-lhs">
                    
                    <div className="footer-lhs-watermark">
                        {/* <img src="images/large-crest-watermark.svg" alt="Ludlow University crest" className="crest__image" width="150px"/> */}
                    
                    
                        <div className="footer-university-lhs">
                            <div className="footer-university_crest-lhs">
                                {/* <img src="images/crest3.png" alt="Ludlow University crest" className="crest__image" width="24px"/> */}
                                <img src="images/footer-crest_lhs.svg" alt="Ludlow University crest" className="footer-university_crest-lhs_image"/>
                            </div>
                            {/* <div className="footer-university_text">
                                <div>Ludlow</div>
                                <div>University</div>
                            </div> */}
                        </div>
                        <div className="footer-social">
                            <img src="images/social-icons.svg" alt="Social media links - Twitter, LinkedIn, Google, Facebook" id="footer-social-media_icons"/>
                        </div>
                    </div>

                </div>
                <div className="footer-rhs">
                    <div className="footer-university-rhs">
                        <div className="footer-university-rhs_top">
                            <div className="footer-university_crest">
                                <img src="images/footer-crest.svg" alt="Ludlow University crest" className="crest__image"/>
                            </div>
                            <div className="footer-university_twitter-header">
                                <div>Ludlow University</div>
                                <div id="footer-university_twitter-handle">@ludlowuni</div>
                            </div>
                            <div className="footer-university_twitter-icon">
                                <img src="images/twitter.svg" alt="Twitter icon" className="footer_twitter-icon"/>
                            </div>
                        </div>
                        <div className="footer-university_twitter-body">
                            <div className="footer-university_twitter-body_text">
                                <p>Ludlow university students enjoying a selfie after the 2019 #campuspaintrun. A total of £4913.14 was raised for multiple charities.  #runformoney.</p>
                            </div>
                            <div className="footer-university_twitter-time">
                                11:44 AM · Jul 10, 2019
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </footer>
        )
     } 
 }

 export default Footer