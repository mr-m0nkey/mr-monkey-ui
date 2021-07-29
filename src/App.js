import React, { Component } from "react";
import { Switch, Route, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTutorial from "./components/tutorials/add-tutorial.component";
import Tutorial from "./components/tutorials/tutorial.component";
import TutorialsList from "./components/tutorials/tutorials-list.component";
import Header from "./components/main/header.component"
import Footer from "./components/main/footer.component";
import Dashboard from "./components/main/dashboard.component";
import SnakeGame from "./components/sketches/snake.component";



class App extends Component {

 
  render() {
   

    return (
      <div>
        <Switch>
          <Header></Header>
          <main></main>
        </Switch>
         
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route exact path="/tutorials" component={TutorialsList} />
            <Route exact path="/tutorials/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/snake" component={SnakeGame} />
          </Switch>

          <Switch>
            <Footer></Footer>
          </Switch>
        </div>
    );
  }
}

export default App;
