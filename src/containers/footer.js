import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

// eslint-disable-next-line import/prefer-default-export
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="/your-experience">Your Experience</Footer.Link>
                        <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                        <Footer.Link href="/order-tracking">Order Tracking</Footer.Link>
                        <Footer.Link href="/delivery-terms-and-conditions">
                            Delivery Terms & Conditions
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Help</Footer.Title>
                        <Footer.Link href="/how-to-order">How to Order</Footer.Link>
                        <Footer.Link>EMI Policy</Footer.Link>
                        <Footer.Link href="/warranty-and-refund-policy">
                            Warranty & Refund Policy
                        </Footer.Link>
                        <Footer.Link href="/procedures-of-refund">Procedures of Refund</Footer.Link>
                        <Footer.Link href="/exchange-policy">
                            How to Exchange Any Device
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link>
                            <Icon className="fas fa-home" />
                            rTech Ltd.
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-map-marker-alt" />
                            Bashundhara City Shopping Mall, Dhaka
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-phone-alt" />
                            01614048148
                        </Footer.Link>
                        <Footer.Link>
                            <Icon className="fas fa-envelope" />
                            contact@rtechbd.com
                        </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/">
                            <Icon className="fab fa-facebook-f" />
                            Facebook
                        </Footer.Link>
                        <Footer.Link href="https://www.instagram.com/">
                            <Icon className="fab fa-instagram" />
                            Instagram
                        </Footer.Link>
                        <Footer.Link href="https://www.youtube.com/">
                            <Icon className="fab fa-youtube" />
                            Youtube
                        </Footer.Link>
                        <Footer.Link href="https://twitter.com/">
                            <Icon className="fab fa-twitter" />
                            Twitter
                        </Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.LastRow>
                    <Footer.LastColumn>
                        <Footer.LastTitle>©2021 by rTech Ltd.</Footer.LastTitle>
                    </Footer.LastColumn>
                </Footer.LastRow>
            </Footer.Wrapper>
        </Footer>
    );
}
