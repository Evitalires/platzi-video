import React, { Component } from 'react'
/* import logo from '%PUBLIC_URL%/images/favicon.ico' */
import MyPlaylist from '../../myPlaylist/components/MyPlaylist'
import ListFriends from '../../ListFriends/components/ListFriends'
import BurgerMenu from "../../icons/components/burgerMenu"
import './related.css'

class Related extends Component {
  state = {
    menu: "menuOpen"
  }
  handleMenu = () => {
    if(this.state.menu === "menuOpen") {
      this.setState({ menu: "menuClose" })
    }
    else {
      this.setState({ menu: "menuOpen"})
    }
  }

  render() {
    if(this.props.screenSize === "mobile" && this.state.menu === "menuOpen") {
      return(
        <section className={`Related ${this.props.screenSize} ${this.state.menu}`}>
          <header>
            <i onClick={this.handleMenu} className={`burgerMenu ${this.props.screenSize}`}>
              <BurgerMenu size={30} color='white'/>
            </i>
            <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="Imagen Related"
            width={250}/>
          </header>
          <main>
            <MyPlaylist
            songs={this.props.myPlaylist}
            title='MyPlaylist'
            />
            <ListFriends users={this.props.user}/>  
          </main> 
        </section>
      )

    }
    if(this.props.screenSize === "mobile") {
      return(
        <section className={`Related ${this.props.screenSize}`}>
         <header>
          <i onClick={this.handleMenu} className={`burgerMenu ${this.props.screenSize}`}>
            <BurgerMenu size={30} color='white'/>
          </i>
          <img
           src={process.env.PUBLIC_URL + '/images/logo.png'}
           alt="Imagen Related"
           width={250}/>
         </header>
        </section>
      )
    }
    else {
      return (
        <section className={`Related`}>
          <header>
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              alt="Imagen Related"
              width={250}/>
            <MyPlaylist
              songs={this.props.myPlaylist}
              title='MyPlaylist'
            />
            <ListFriends users={this.props.user}/>
          </header>
        </section> 
      )
    }
  }
}


export default Related
