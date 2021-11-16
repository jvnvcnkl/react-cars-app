import React from 'react'
import CarsService from '../services/CarsService'
import { useEffect } from 'react';
import { useState } from 'react';

export default function AppCars() {

    const [cars, setCars] = useState([]);


    useEffect(() => {
        async function getCars() {
            setCars(await CarsService.getAll())
        }
        getCars()
    }, []);




    console.log(cars)


    return (
        <div>
            <h2>Cars</h2>

            <ul>
                {cars.map((car) => {
                    <li> {car.brand} {car.model}{car.year} {car.numberOfDoors}
                        {car.engine} {car.isAutomatic} {car.maxSpeed}</li>
                })}
            </ul>
        </div>
    )
}
