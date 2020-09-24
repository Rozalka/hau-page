import React, { useState, useEffect } from 'react'
import Advert from "./Advert";

function Operations() {
    const [offers, setOffer] = useState([]);

    useEffect(() => {
        fetchAllOffers()
    }, [])

    const fetchAllOffers = () => {
        fetch('http://localhost:3000/offers')
            .then(resp => resp.json())
            .then(allOffers => setOffer(allOffers))
    }

    return (
        <>
            <button>Dodaj ogłoszenie</button>
            <button>Moje rezerwacje</button>
        <ul>
          {offers.map(offer => <Advert key={offer.id} {...offer} />)}  
        </ul>
        </>
    )
}

export default Operations
