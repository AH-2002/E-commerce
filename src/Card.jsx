import AddtoCartButton from "./AddtoCartButton";

export default function Card({ src, title, price, category, cartButton, id }) {
    return (
        <div className="card" style={{
            border: 'none', width: '400px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'
        }}>
            <div style={{ height: "380px", width: "300px", marginBottom: '15px' }}>
                <img src={src} className="card-img-top w-100 h-100" alt="Hat" style={{ margin: '20px 0 10px 0', objectFit: 'cover', boxShadow: ' 0 4px 6px rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div className="card-body">
                <p className="card-text">{title.length > 23 ? title.slice(0, 23) + "..." : title}</p>
                <p style={{ fontWeight: "bold" }}>{`${price} $`}</p>
                <p>{category}</p>
                <AddtoCartButton cartButton={cartButton} productId={id} />
            </div>
        </div>
    );
}
