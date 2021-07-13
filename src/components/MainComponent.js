import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent.js';
import About from './AboutComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


//Map will return the redux state in to the props (that otherwise wouldve come from the constructor of the class)
const MapStatetoProps = state =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
        contactformopen: state.contactformopen,
    }
}

class Main extends Component {
  
  constructor (props){
    super(props);
  }

  render(){
      const HomePage = ()=>{
        return (
          <Home   dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                  promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                  leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
        );
      }
      
      const DishWithId = ({match}) => {
        return(
          <div>
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                        contactform={this.props.contactformopen}></DishDetail>
          </div>
        )
      }

      return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
      );
  }
}

export default withRouter(connect(MapStatetoProps)(Main));
