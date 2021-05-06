import React, { useState } from 'react';

function Booking(props) {
    let roomvalue = props.name.rooms
    const [ bill, setBill ] = useState({billgenerated: false,noofpeople:0,noofnights:0,amount:0,settleAmount:false});
    
    const generateBill = () => {
       if(bill.noofpeople > roomvalue.max_occupancy || bill.noofpeople <= 0){
           setBill({...bill,billgenerated:!bill.billgenerated,amount:(roomvalue.price_in_usd) * (bill.noofnights) * (roomvalue.max_occupancy)})
       }
       else {
            setBill({...bill,billgenerated:!bill.billgenerated,amount:(roomvalue.price_in_usd)*(bill.noofnights)*(bill.noofpeople)})
       }
    }
    const getNoofpeople = e => {
        let peopleinroom = e.target.value;
        setBill({...bill,noofpeople:peopleinroom,billgenerated:false})
    }
    const getNoofnights = e => {
        let totaldays = e.target.value;
        setBill({...bill,noofnights:totaldays,billgenerated:false})
    }
    const getPayment = () => {
       setBill({...bill,settleAmount:true})
    }
    return (
        <div style={{
            backgroundColor: 'lightyellow', 
            border: '1px solid yellow',
            padding: '10px',
          }} >
               {bill.settleAmount === false ? (<div>
                <p>Please fill below details for the checkout:</p>
                <div className="pay-room">
                    <label>Mobile number:</label>
                    <input type="phone" placeholder="Enter mobile number" />
                </div>
                <div className="pay-room">
                    <label>Number of people:(max can be add depending on occupancy)</label>
                    <input type="number" min="1" max={roomvalue.max_occupancy} onChange={getNoofpeople} value={bill.noofpeople}/>
                </div>
                <div className="pay-room">

                    <label>Number of nights:</label>
                    <input type="number" min="1" onChange={getNoofnights} value={bill.noofnights}/>
                </div>
                <div className="pay-room">

                    <label>Check in date</label>
                    <input type="date" />
                </div><br>
                </br>
                <div>
                
                <input type="checkbox" onClick={() =>{generateBill()}}/>
                <label>Agree to the Details(check to see the total amount)</label>
                </div>
                <hr></hr>
                {(bill.noofpeople > roomvalue.max_occupancy) ?
                (<p>According to the rule, Number of people should not exceeed occupancy of the room selected {roomvalue.max_occupancy}</p>):(
                    <p>You selected:</p>
                )}
                <div>Room Price/Night: {roomvalue.price_in_usd}USD</div>
                <div>Number of People: {(bill.noofpeople > roomvalue.max_occupancy) ? (roomvalue.max_occupancy):(bill.noofpeople)}</div>
                <div>Number of Nights: {bill.noofnights}</div>
                <hr></hr>
                <div> Total Amount: {bill.amount} USD</div>
               

                <button onClick={getPayment}>Pay now</button>
                </div> ):

                (<div><p>Congratulations John! Your Booking is Confirmed.</p>
                <p>Thank you for Choosing.</p></div>)}
              
        </div>
    )
}

export default Booking;