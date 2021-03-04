import React from 'react'
import {useSpring, animated} from 'react-spring'

export default function TopBusinesses() {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
         <>
        <section style={{height: '50vh',
                        backgroundColor: 'lightgray'}}>
                <animated.h2 style={props} className="main-title">TopBusinesses</animated.h2>
        </section>
        </>
    )
}
