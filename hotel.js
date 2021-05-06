// To get the dummy data for the dummy api creation
var faker = require('faker')

// To convert image to base64, so that it can be loaded on the browser directly
var base64Img = require('base64-img');

//function to generate hotels api
function generateHotels() {
  var hotel = []
  //price range initial array value
  var price_val = ['low', 'medium', 'high']
  // Considering number of objects
  for (var input = 0; input < 50; input++) {
    // generate hotel details through faker
    var id = faker.datatype.uuid()
    var name = "Hotel" + " " + faker.company.companyName()
    var description = faker.lorem.sentence()
    var rad = function (x) {
      return x * Math.PI / 180;
    };
/*------------------------------------------------------------- 
Create distance from the fixed venue in dusseldorf*/
//initially distance is 0km 
var distance_to_venue = 0;
//function to get random points between given max and min value

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // long-val is to get random longitude points between given range
    var long_val = getRandomArbitrary(51.1800, 51.3400);

    // lat-val is to get random latitude points between given range
    var lat_val = getRandomArbitrary(6.7418, 6.8000);

    /* getDistanceFromLatLonInKm gets values From the above yielded function we need 
    to determine distance between Venue to the yielded points in KM (HAVERSINE FORMULA)*/
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371;
      var dLat = deg2rad(lat2 - lat1);
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;

      distance_to_venue = d.toFixed(1);
      return d;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    // function call from one of the conference halls in dusseldorf to random points inside dusseldorf
    getDistanceFromLatLonInKm(51.2560, 6.7418, long_val, lat_val)

    // Generate price_category and rating through random function
    var rating = Math.floor(Math.random() * 5) + 1
    var random = Math.floor(Math.random() * price_val.length)
    var price_category = price_val[random]
    
    /*random arbitary to slice the array within the given range, making sure array
    cannot be empty and even if it exceeds limits lice gives the length of the array*/
    var n = getRandomArbitrary(1, 8)
    var array = ['free parking', 'free-wifi', 'gym', 'pets', 'pool', 'restaurant', 'spa']
    var amenities = array.slice(0, n);

    /* Encoding the images by passing 4 different sets of array values with paths */
    let array1 = []
    var hotel1 = [
      '../images/bandb/banb5.jpg',
      '../images/bandb/bandb1.jpg',
      '../images/bandb/bandb2.jpg',
      '../images/bandb/bandb3.jpg',
      '../images/bandb/bandb4.jpg',
      '../images/bandb/hotel_b&b.jpg'
    ]
    var hotel2 = [
      '../images/hilton/hotel_hilton3.jpg',
      '../images/hilton/hotel_hilton2.jpg',
      '../images/hilton/hotel_hilton1.jpg',
      '../images/hilton/hotel_hilton.jpg',
      '../images/hilton/hilton7.jpg',
      '../images/hilton/hilton6.jpg',
      '../images/hilton/hilton4.jpg'
    ]
    var hotel3 = [
      '../images/hyatt/hotel_hyatt.jpg',
      '../images/hyatt/hyatt1.jpeg',
      '../images/hyatt/hyatt3.jpg'
    ]
    var hotel4 = [
      '../images/melia/hotel_melia.jpg',
      '../images/melia/melia1.jpg',
      '../images/melia/melia2.jpg',
      '../images/melia/melia3.jpg',
      '../images/melia/melia4.jpg',
      '../images/melia/melia5.jpg'
    ]

    // pass the hotel array value in function and generate binary format images and push it in the temp array
    function sendHotel(storedHotel, array1) {
      for (var i = 0; i < storedHotel.length; i++) {
        var data = base64Img.base64Sync(storedHotel[i]);
        array1.push(data)

      }
      return array1;
    }
    // array to be sent to the hotel api on random basis depending on the previous arbitary value
    function sendRandomHotel(n) {
      array1 = []
      if (n >= 1 && n < 3) {
        sendHotel(hotel1, array1)
      }
      else if (n >= 3 && n < 5) {
        sendHotel(hotel2, array1)
      }
      else if (n >= 5 && n < 7) {
        sendHotel(hotel3, array1)
      }
      else {
        sendHotel(hotel4, array1)
      }
    }
    sendRandomHotel(n)
    /* Room Schema based on faker js and above used implenetations created rooms Schema*/
    var room = [];
    for (var j = 0; j < 10; j++) {

      var rid = faker.datatype.uuid()
      var rname = faker.name.findName()
      var rdesc = faker.lorem.sentence()
      var roccup = Math.floor(Math.random() * 4) + 1
      var rrating = Math.floor(Math.random() * 5) + 1
      var rprice = Math.floor(Math.random() * 2000) + 100
      var ravail = (Math.floor(Math.random() * 4) + 1) % 2 === 0 ? true : false
      room.push({
        "id": rid,
        "name": rname,
        "description": rdesc,
        "max_occupancy": roccup,
        "rating": rrating,
        "price_in_usd": rprice,
        "available": ravail
      })
    }
    hotel.push({
      "id": id,
      "name": name,
      "description": description,
      "distance_to_venue": distance_to_venue,
      "rating": rating,
      "price_category": price_category,
      "amenities": amenities,
      "rooms": room,
      "images": array1
    })
  }

  return { "hotel": hotel }
}
module.exports = generateHotels