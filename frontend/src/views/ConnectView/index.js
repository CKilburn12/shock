import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Profile from '../../components/ui/Profile';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../styles/scroll.css';

class ConnectView extends Component
{
  constructor()
  {
    super();

    this.state = {
      users: []
    };

  }

  componentDidMount()
  {
    this.setState({
      users: [{
        name: "Graham M.",
        major: "Computer Science",
        id: "misaig",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Drumming", "Programming", "Playing Football"],
        social: [
          {name: "instagram", id:"gmisail"},
          {name: "snapchat", id:"gmisail"}
        ]
      },
      {
        name: "Colin K.",
        major: "Electrical Engineering",
        id: "kilbuc",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        interests: ["Watching the Eagles get injured", "Going to Tech Dumps", "Sleeping"],
        social: [
          {name: "instagram", id:"ckilburn12"},
          {name: "snapchat", id:"ckilburn12"}
        ]
      }
    ]});
  }

  render()
  {
      return (
        <CarouselProvider lockOnWindowScroll={true} dragEnabled={false} naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={this.state.users.length}>
          <div className="row">
            <div className="col">
              <ButtonBack className="my-3 btn btn-warning btn-block"><i class="fa fa-arrow-circle-left"></i></ButtonBack>
            </div>

            <div className="col-10">
              <Slider>
              {
                this.state.users.map((user, id) => <Slide index={id}><Profile key={id} name={user.name} interests={user.interests} social={user.social} major={user.major} id={user.id} bio={user.bio} /></Slide>)
              }
              </Slider>
            </div>
            
            <div className="col">
              <ButtonNext className="my-3 btn btn-warning btn-block"><i class="fa fa-arrow-circle-right"></i></ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      );
  }
}

export default ConnectView;
