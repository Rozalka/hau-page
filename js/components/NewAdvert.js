import React, { useState } from "react";

function NewAdvert({ onNewAdvert }) {
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleAddAdvert = (e) => {
    e.preventDefault();

    const offer = {
      person: "",
      email: "",
      offer: "",
      date: "",
      price: "",
      status: "open",
    };

    createAdvert(offer, onNewAdvert);
  };

  return (
    <div >
        <h1 >New advert</h1>
        <form onSubmit={handleAddAdvert}>
          <div className="form-group">
            <input type="text" name="person" placeholder="person" value={person} onChange={(e) => setPerson(e.target.value)}/>
            <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="offer"placeholder="offer" value={offer} onChange={(e) => setOffer(e.target.value)}/>
            <input type="date" name="date"placeholder="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type="text" name="price"placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>
          <button>Add offer!</button>
          {/* <Button>
            
          </Button> */}
        </form>
    </div>
  );
}

export default NewAdvert;
