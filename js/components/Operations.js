import React, { useState, useEffect } from 'react'
import Advert from "./Advert";
import NewAdvert from "./NewAdvert";

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
    const addOffer = (addNewOffer) => {
        fetch(`http://localhost:3000/cars/`, {
            method: "POST",
            body: JSON.stringify(addNewOffer),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then( fetchAllOffers )
    }


    return (
        <>
            <button>Dodaj ogłoszenie</button>
            <button>Moje rezerwacje</button>
        <ul>
            <NewAdvert addOffer={addOffer}/>
          {offers.map(offer => <Advert key={offer.id} {...offer} />)}  
        </ul>
        </>
    )
}

export default Operations


