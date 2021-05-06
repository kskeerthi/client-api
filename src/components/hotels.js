import React, {Component} from 'react';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%',
  };
class Hotels extends Component {
    constructor(props) {
        super(props);
      this.state = {
          stores: [{lat: 51.49855629475769, lng: 6.74184416996333},
                  {latitude: 51.329423, longitude: 6.7421071},
                  {latitude: 51.2052192687988, longitude: 6.888426208496},
                  {latitude: 51.307081, longitude: 6.75434325},
                  {latitude: 51.3084488, longitude: 6.7640121},
                  {latitude: 51.24695, longitude: 6.7825407}],
        }
      }
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
   
       
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 51.2500, lng: 6.7480}}
          >
            {this.displayMarkers()}
          </Map>
        );
      }
    
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCZWGpCh1xdQ4-2qL5iKGlgUvixAlJTHjs'
  })(Hotels);
