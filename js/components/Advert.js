import React from 'react'

function Advert({person, email, offer, date, price, status}) {
    return (
        <li>
            <form>
            <p> Who? {person}</p>
            <p>e-mail {email}</p>
            <p>what I can do? {offer} and when? {date} </p>
            <p>cost {price}</p>
            <p>status: {status}</p>
            </form>

        </li>
    )
}

export default Advert
