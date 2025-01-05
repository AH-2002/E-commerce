import React from "react"

export default function Contact() {

    return (
        <section style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: "center", margin: '0 auto', padding: '40px 0 40px 0' }}>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>Contact Us</h2>
                <p>We are here to help and answer any questions you might have. </p>
                <p>We will lookforward to hear from you. </p>
            </div>

            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li><i style={{ marginRight: '5px' }} className="fas fa-map-marker-alt"></i> Location : 123, STREET NAME, CITY, US</li>
                    <li style={{ margin: '10px 0 10px 0' }}><i style={{ marginRight: '5px' }} className="fas fa-phone"></i> Phone : (123) 456-7890</li>
                    <li><i style={{ marginRight: '5px' }} className="fas fa-envelope"></i> Email : MAIL@EXAMPLE.COM</li>
                </ul>
            </div>
        </section>
    )
}