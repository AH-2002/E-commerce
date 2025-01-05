import React from "react"

export default function About() {

    return (
        <section style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: "center", margin: '0 auto', padding: '40px 0 40px 0' }}>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>About Us</h2>
                <p>Welcome to <span style={{ fontWeight: 'bolder' }}>rymo</span>, your one-stop destination for high-quality products at unbeatable prices. We are passionate about providing exceptional value and outstanding service to our customers.
                    Since our launch, we’ve been dedicated to curating a diverse selection of products that fit every lifestyle. Whether you’re looking for the latest tech gadgets, trendy fashion, home essentials, or beauty products, we’ve got you covered.</p>
            </div>
            <div style={{
                width: '80%',
                height: '5px',
                backgroundColor: '#ddd',
                margin: '40px auto'
            }}></div>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>Our Misiion</h2>
                <p> At <span style={{ fontWeight: 'bolder' }}>rymo</span>, we believe that shopping should be simple, fun, and affordable. Our mission is to bring you carefully selected products from trusted brands, ensuring quality and satisfaction every step of the way.</p>
            </div>
            <div style={{
                width: '80%',
                height: '5px',
                backgroundColor: '#ddd',
                margin: '40px auto'
            }}></div>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>Why Choose Us?</h2>
                <ul style={{ listStyle: 'none' }}>
                    <li><p>Curated Selection – We handpick our products to ensure the highest quality.</p></li>
                    <li><p>Affordable Prices – Competitive pricing without compromising on quality.</p></li>
                    <li><p>Fast & Reliable Shipping – Get your products delivered quickly and safely.</p></li>
                    <li><p>Exceptional Customer Service – Our team is here to assist you with any inquiries or concerns.</p></li>
                </ul>
            </div>
            <div style={{
                width: '80%',
                height: '5px',
                backgroundColor: '#ddd',
                margin: '40px auto'
            }}></div>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>Our Values</h2>
                <ul style={{ listStyle: 'none' }}>
                    <li><p>Customer-Centric – Your satisfaction drives everything we do.</p></li>
                    <li><p>Transparency – Clear and honest communication with no hidden fees..</p></li>
                    <li><p>Innovation – Constantly evolving to bring you the best products and experiences.</p></li>
                </ul>
            </div>
            <div style={{
                width: '80%',
                height: '5px',
                backgroundColor: '#ddd',
                margin: '40px auto'
            }}></div>
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '50px', fontWeight: 'bolder' }}>Join Our Commuinty</h2>
                <p>We are more than just an online store – we are a community of shoppers who value quality and trust. Follow us on social media to stay updated on the latest deals, promotions, and product launches.

                    Thank you for choosing <span style={{ fontWeight: 'bolder' }}>rymo</span>. We look forward to serving you and making your shopping experience unforgettable!</p>
            </div>

        </section>
    )
}