import React, { useState } from 'react';
import Booking from './booking';
const About = (props) => {


    const [ value, setHotelRoom ] = useState({roomselected: false,rooms:undefined});
    
    const showRoomDetails = (hotel,hotelroom) => {
        hotelroom['hotelname'] = hotel.name
        hotelroom['hamenities'] = hotel.amenities
        hotelroom['hdescription'] = hotel.description
        hotelroom['hdistance_to_venue'] = hotel.distance_to_venue
        hotelroom['hid'] = hotel.id
        hotelroom['hprice_category'] = hotel.price_category
        hotelroom['hrating'] = hotel.rating

      };
    
    return (
        <div>
        { value.roomselected === false ? (
        props.message.map(post => (
            <div>
                
                <div className="hotel-description-details">
                    <p>Welcome to the {post.name}!!</p>
                    <div className="images-shoowcase">{post.images.map(img => (
                        <img className="rooms-images" src={img} height="100" width="100" alt=""/>
                    ))}</div>
                    <div>
                        <p className="hotel-name">Hotel Details:</p>
                        <p>{post.description} with <span className="hotel-name">{post.price_category}</span> price category</p>
                        <p><span className="hotel-name">Distance from Venue:</span><span>{post.distance_to_venue} KM</span></p>
                        <p><span className="hotel-name">Rating: </span><span>{post.rating}/5</span></p>
                        <p className="hotel-name">Amenities:</p>
                        <p>{post.amenities.map(amenity => (
                            <div className="amenities-list">
                                <ul>
                                    <li>{amenity}</li>
                                </ul>

                            </div>

                        ))}</p>
                    </div>
                </div>
                <div>
                    <div>{post.rooms.map(room => (

                        <div className="room-specifications">
                            <div className="rooms-description">
                                <p className="hotel-name">Room details:</p>
                                <p>Room Name: {room.name}</p>
                                <p>{room.description}</p>
                                <p>Maximum Occupancy: {room.max_occupancy}</p>
                                <p>Room Rating: {room.rating}/5</p>



                            </div>
                            <div className="book-room">
                                <button disabled={!room.available} className="book-room-button" onClick={() => {showRoomDetails(post,room);setHotelRoom({roomselected:true,rooms:room})}}>Book Room</button>
                                <p className="room-price">at<span>{room.price_in_usd}</span> USD</p>
                                {room.available ? (
                                    <p>Available</p>
                                ) : (<p>Not available</p>)}
                            </div>
                        </div>

                    ))}</div>
                </div>
            </div>
        ))
        ):(<div>
            
            <Booking name={value}/>
        </div>)}
        </div>

    );
    
}
export default About;