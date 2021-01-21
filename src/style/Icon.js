import React from 'react'
import food from './icons/food.png';
import medicine from './icons/medicine.png';
import professionals from './icons/professionals.png';
import trips from './icons/trips.png';
import vacationers from './icons/vacationers.png';
import logo from './images/logo.png';


export default function Icon(props) {
    const {value, size} = props;
    const icons={
        logo: logo,
        food: food,
        medicine: medicine,
        professionals: professionals,
        trips: trips,
        vacationers: vacationers
    }
    const sizes={
        large: "large-icon", 
        medium: "medium-icon",
        small: "small-icon"    
    }
    return (
        <img src={icons[value]} alt={value} className={sizes[size]}/>
    )
}
