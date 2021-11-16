import React from 'react'
import { useState } from 'react'
import CarsService from '../services/CarsService'
import { useHistory } from 'react-router'

export default function AddCar() {
    const history = useHistory();
    const [form, setForm] = useState(
        {
            brand: '',
            model: '',
            year: 0,
            maxSpeed: 0,
            isAutomatic: false,
            engine: '',
            numberOfDoors: 0,
        }
    )

    const handleSubmit = () => {

        CarsService.add(form)
        history.push('/cars');

    }

    const handleReset = (e) => {
        e.preventDefault()
        setForm({
            brand: '',
            model: '',
            year: 0,
            maxSpeed: 0,
            isAutomatic: false,
            engine: '',
            numberOfDoors: 0,
        })
    }

    const handlePreview = (e) => {
        e.preventDefault()
        const object = JSON.stringify(form)
        alert(object)
    }


    return (

        <div>
            <form onSubmit={handleSubmit}> <h2>Add a new car </h2>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Car Brand</label>
                    <input type="text" className="form-control" id="brand" value={form.brand} onChange={({ target }) => setForm({ ...form, brand: target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Car Model</label>
                    <input type="text" className="form-control" id="model" value={form.model} onChange={({ target }) => setForm({ ...form, model: target.value })} />
                </div>
                <select id='year' name="year" className="datefield year" value={form.year} onChange={({ target }) => setForm({ ...form, year: target.value })} >
                    <option value="">Year</option>
                    <option value="2008">2018</option>
                    <option value="2007">2017</option>
                    <option value="2006">2016</option>
                    <option value="2005">2015</option>
                    <option value="2004">2014</option>
                    <option value="2003">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                </select>
                <div className="mb-3 form-check">
                    <label htmlFor="maxSpeed" className="form-label">What is the max speed of the car?(km/h)</label>
                    <input type="number" id="maxSpeed" value={form.maxSpeed} onChange={({ target }) => setForm({ ...form, maxSpeed: target.value })} />
                </div>
                <div className="mb-3 form-check">
                    <label htmlFor="numberOfDoors" className="form-label">How many doors does the car have?</label>
                    <input type="number" id="numberOfDoors" value={form.numberOfDoors} onChange={({ target }) => setForm({ ...form, numberOfDoors: target.value })} />
                </div>
                <div className="mb-3 form-check">
                    <label></label>
                    <label htmlFor="isAutomatic" className="form-label">Is the car automatic?</label>
                    <input className="form-check-input" type="checkbox" value={form.isAutomatic} id="isAutomatic" onChange={({ target }) => setForm({ ...form, isAutomatic: target.value })} />
                </div>
                <div id="id" >
                    <p> Engine </p>
                    <input type="radio" name="engine" value="Diesel" checked={"Diesel" == form.engine} id='engine' onChange={({ target }) => setForm({ ...form, engine: target.value })} />
                    <label htmlFor="engineDiesel">
                        Diesel
                    </label>
                    <input type="radio" name="engine" value="Petrol" checked={"Petrol" == form.engine} id='engine' onChange={({ target }) => setForm({ ...form, engine: target.value })} />
                    <label htmlFor="enginePetrol">
                        Petrol
                    </label>
                    <input type="radio" name="engine" value="Electric" checked={"Electric" == form.engine} id='engine' onChange={({ target }) => setForm({ ...form, engine: target.value })} />
                    <label htmlFor="engineElectric">
                        Electric
                    </label>
                    <input type="radio" name="engine" value="Hybrid" checked={"Hybrid" == form.engine} id='engine' onChange={({ target }) => setForm({ ...form, engine: target.value })} />
                    <label htmlFor="engineHybrid">
                        Hybrid
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                <button className="btn btn-primary" onClick={handleReset}>Reset</button>
                <button className="btn btn-primary" onClick={handlePreview}>Preview</button>


            </form >


        </div >
    )
}

// brand i model se unose pomoću text input - a
// ○year se unosi preko select box - a, u kome su prikazane godine 1990 - 2018
// ○maxSpeed i numberOfDoors se unose pomoću number input - a
// ○isAutomatic se obeležava preko checkbox - a
// ○engine realizovati preko radio button - a.Opcije su`diesel`, `petrol`,
//     `electric`, `hybrid`