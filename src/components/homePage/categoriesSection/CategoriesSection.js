import React from 'react'
import Icon from '../../Icon'
export default function CategoriesSection() {
    return (

        <section style={{height: '50vh',
        //  position: 'relative',
        //  backgroundSize: 'cover',
         backgroundColor: 'blue'}}>
             <h2>Categories</h2>
                <Icon name="foodCategory"/>
                <Icon name="foodCategory"/>
                <Icon name="tripCategory"/>
                <Icon name="vacationCategory"/>
                <Icon name="professionalCategory"/>
                <Icon name="medicineCategory"/>
         </section>
    )
}
