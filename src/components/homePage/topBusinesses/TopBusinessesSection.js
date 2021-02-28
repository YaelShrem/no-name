import React from 'react'
import {useSpring, animated} from 'react-spring'

// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];
export default function TopBusinesses() {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        // <div style={{position: 'relative', alignItems: 'center'}}>
        //     <h1>עסקים נבחרים</h1>
        //     <AliceCarousel
        //          mouseTracking
        //         items={items}
        //         responsive={responsive}
        //     />
        // </div>
        <>
        <section style={{height: '50vh',
                        backgroundColor: 'lightgray'}}>
                <animated.h2 style={props} className="main-title">TopBusinesses</animated.h2>
        </section>
        </>
    )
}
