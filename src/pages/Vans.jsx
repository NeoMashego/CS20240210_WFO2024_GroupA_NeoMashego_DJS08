import React, {useState} from "react"
import { Link } from "react-router-dom"
import Vanny from "../images/van.jpg"

const van = [
    {
        id: 1,
        color: "purple",
        type: "Minivan",
        registration: new Date('2017-01-03'),
        capacity: 7
    },
    {
        id: 2,
        color: "red",
        type: "Station wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
    },
    {
        id: 3,
        color: "blue",
        type: "Sedan",
        registration: new Date('2019-05-03'),
        capacity: 5
    }
]

function Vans(){

    const vanElements = van.map(v => (
        <div className="van-tile" key={v.id}>
            <img src={Vanny} />
            <Link to={`/vans/${v.id}`}>
                <div className="van-info">
                    <h2>{v.type}</h2>
                    <h4>color: {v.color}</h4>
                </div>
                <i className={`van-capacity ${v.capacity} selected`}>{v.capacity}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans