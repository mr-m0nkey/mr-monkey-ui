import React, { Component } from "react";
import { Link  } from "react-router-dom";

export default class Header extends Component {



  render() {

    return (
        <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left"> 
            <h1 className="logoname"><Link to="/tutorials/add">Chill<span>a</span>id</Link></h1>
          </div>
          <nav id="mainav" className="fl_right"> 
            <ul className="clear">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link className="drop">Pages</Link>
                <ul>
                  <li><Link >Gallery</Link></li>
                  <li><Link>Full Width</Link></li>
                  <li><Link>Sidebar Left</Link></li>
                  <li><Link>Sidebar Right</Link></li>
                  <li><Link>Basic Grid</Link></li>
                  <li><Link>Font Icons</Link></li>
                </ul>
              </li>
              <li><Link className="drop">Dropdown</Link>
                <ul>
                  <li><Link>Level 2</Link></li>
                  <li><Link className="drop">Level 2 + Drop</Link>
                    <ul>
                      <li><Link>Level 3</Link></li>
                      <li><Link>Level 3</Link></li>
                      <li><Link>Level 3</Link></li>
                    </ul>
                  </li>
                  <li><Link>Level 2</Link></li>
                </ul>
              </li>
              <li><Link>Link Text</Link></li>
              <li><Link>Link Text</Link></li>
              <li><Link>Link Text</Link></li>
            </ul>

          </nav>
        </header>
      </div>

      
    );
  }
}