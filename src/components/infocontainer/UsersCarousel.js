import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Image, Carousel } from 'react-bootstrap';


export default class UsersCarousel extends Component {
   
  render() {
    return (
      <Carousel interval={null} indicators={false}>
        {this.props.users.map(item => (
              <Carousel.Item key={item.id} className="lol">
                <div className="flex_row info_page">
                  <div className="flex_row_cell">
                  </div>
                    <Link to={item.id}>
                      <div className="flex_row_cell slide">
                        <Image
                          src={item.avatar}
                          className="avatar_carousel"
                        roundedCircle/>
                      </div>
                    </Link>
                  <div className="flex_row_cell">
                  </div>
                </div>
              </Carousel.Item>))
        }
      </Carousel>
    )
  }
}