import React, {useState} from 'react';
import About from './about';

import {FormattedMessage} from "react-intl";

import { I18nPropvider, LOCALES } from '../i18nProvider';
export default class HotelCard extends React.Component {
  locale = null;
  constructor(props) {
    super(props);

    this.locale = props.locale;
    //const [locale, setLocale] = useState(LOCALES.ENGLISH);
    console.log(this.locale)
    this.state = {
      error: null,
      isLoaded: false,
      posts: [],
      filtered: [],
      search: "",
      redirect: false,
      locale:this.locale
       
    };
    let filteredDetails;
  }

  componentDidMount() {
    fetch("http://localhost:3006/hotel")
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            posts: result,
            filtered: result,
            locale: this.locale
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        },
      )
  }
  handleSearch(e) {
    this.setState({search:e.target.value.substr(0,20)});
 }
 showHotelRooms(value) {
   this.roompropsval = [];
   this.roompropsval.push(value)
   this.setState({redirect: true})

 }
 handleSelect(e){
   if(e.target.value === "distance"){
    this.filteredDetails = this.state.posts.sort(function (a, b) {
      return a.distance_to_venue - b.distance_to_venue;
    });
    this.setState({posts:this.filteredDetails})
   }
   else if(e.target.value === "ratings") {
    this.filteredDetails = this.state.posts.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    this.setState({posts:this.filteredDetails})
   }
   else {
     console.log("Other criteria might be extension");
   }
   
   
 }
  render() {
    const { error, isLoaded } = this.state;
    this.filteredDetails = this.state.posts.filter(val => {
      return val.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      })
    
    if (error) {
      return <div>Error in loading</div>
    } else if (!isLoaded) {
      return <div>Loading ...</div>
    }
      else if (this.state.redirect){
        return<div><About message={this.roompropsval}/></div>
    } else {
      return (
        <I18nPropvider locale={this.locale}>
        <div className="flex-to-display-hotels">
          <div className="filtering-options">
            <div className="search-bar">
              <div>
                <input type="text" placeholder="Search here..."  onChange={this.handleSearch.bind(this)}/>
                
              </div>
            </div>
            <div className="dropdown-options">
              <div className="dropdown-align">
                <select name="price" id="price" onChange={this.handleSelect.bind(this)}>
                  <option value="ratings">User Ratings</option>
                  <option value="distance">Distance</option>
                </select>

              </div>
            </div>
          </div>
          
          {
           (this.filteredDetails.length !== 0)? this.filteredDetails.map(post => (
            
             <div className="display-hotel-cards">
              <div key={post.id}>
                <div className="hotel-card-det">
                  <div className="hotel-image">
                  <img src={post.images[2]} className="image-specifications" alt=""/>
                  </div>
                  <div className="book-and-price">
                  
                    <div className="hotel-name">{post.name}</div>
                    <div className="hotel-description">{post.description}</div>
                    <div className="hotel-sub-details">
                      <div className="hotel-rating">Rating:{post.rating}</div>
                      <div className="hotel-price">Price Category: {post.price_category}</div>
                      <div className="hotel-distance">Distance from Venue: {post.distance_to_venue} KM</div>
                      <div className="hotel-info">To Know more details of Hotel view here...</div>
                      <div><button className="hotel-view-button" onClick={() => this.showHotelRooms(post)}>View</button></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            )): <div className="hotel-name">Sorry could not find your search criteria!!!</div>
          }
         
        
        </div>
      
    </I18nPropvider>
      );
    }
  }
}

//   <FormattedMessage id="title1" />
