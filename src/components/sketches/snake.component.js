import React, { Component } from "react";
import p5 from 'p5';


export default class SnakeGame extends Component {



  render() {

    return (
       <div>
           Snake Game
            <div id="snake">

            </div>
       </div>
    );
  }
}



const sketch = (s) => {

    const width = 1000;
    const height = 1000;
    const resolution = 10;

    class Food {
        constructor() {
        //    this.position
            // this.type
        }
    }

    class Snake {
        
        constructor() {
            this.body = [];
            this.body[0] = s.createVector(width/resolution/2, height/resolution/2);
            this.velocity = s.createVector(0, 0);
        }

        setVelocity(velocity) {
            this.velocity = velocity;
        }

        grow() {
            let tail = this.body[this.body.length - 1].copy();
            this.body.push(tail);
        }

        update() {
            let previousHead = this.body[0].copy();
            this.body.unshift(this.body.pop());
            this.body[0] = previousHead.add(this.velocity);
        }

        display() {
            for(let i = 0; i < this.body.length; i++) {
                s.rect(this.body[i].x, this.body[i].y, 1, 1)
            }
        }
    }

    var player;

    s.setup = () => {
        s.createCanvas(width, height);
        s.frameRate(5);
        player = new Snake();
    }

    s.draw = () => {
        s.scale(resolution)
        s.background(20);
        
        player.update(); 

        player.display();
    }

    s.keyPressed = () => {
        if (s.key === 'a') {
            player.setVelocity(s.createVector(-1, 0));
        } else if (s.key === 'd') {
            player.setVelocity(s.createVector(1, 0));
        } else if (s.key === 's') {
            player.setVelocity(s.createVector(0, 1));
        } else if (s.key === 'w') {
            player.setVelocity(s.createVector(0, -1));
        } else if (s.key === ' ') {
            player.grow();
        }
    }

    
}

const sketchInstance = new p5(sketch, document.getElementById('snake'));


