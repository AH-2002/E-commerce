import React from "react";
import sneakers from "./img/new/1.jpg";
import outfit from "./img/new/5.jpg";
import watch from "./img/new/3.jpg";

export default function ProdPic() {

    return (
        <section className='prodpic'>
            <div className='prodpicContainer d-flex align-items-center justify-content-center'>
                <div className='prod' style={{
                    width: '33.3333%', height: '400px', position: 'relative', textAlign: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <img className='w-100 h-100' src={sneakers} alt="" />
                    <p style={{
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: '30px'

                    }}>Extreme Rare Sneakers</p>
                </div>
                <div className='prod' style={{
                    width: '33.3333%', height: '400px', position: 'relative', textAlign: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}> <img className='w-100 h-100' src={outfit} alt="" />
                    <p style={{
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: '30px'

                    }}>Awsome Blank Outfit</p>
                </div>
                <div className='prod' style={{
                    width: '33.3333%', height: '400px', position: 'relative', textAlign: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}><img className='w-100 h-100' src={watch} alt="" />
                    <p style={{
                        position: 'absolute',
                        fontWeight: 'bold',
                        fontSize: '30px'

                    }}>Sportwear up to 50% off</p>
                </div>
            </div>
        </section>

    )
}
