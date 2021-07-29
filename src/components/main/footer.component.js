import React, { Component } from "react";
import { Link  } from "react-router-dom";

export default class Footer extends Component {



  render() {

    return (
      <div>
        <div className="wrapper row2">
  <section id="ctdetails" className="hoc container clear"> 
    {/* ################################################################################################ */}
    <div className="sectiontitle">
      <p className="nospace font-xs">Enim eleifend dignissim bibendum</p>
      <h6 className="heading font-x2">Id tristique id metus nulla</h6>
    </div>
    <figure className="one_half first">
      <ul className="nospace clear">
        <li className="block clear"><a href="#"><i className="fas fa-phone" /></a> <span><strong>Give us a call:</strong> +00 (123) 456 7890</span></li>
        <li className="block clear"><a href="#"><i className="fas fa-envelope" /></a> <span><strong>Send us a mail:</strong> support@domain.com</span></li>
        <li className="block clear"><a href="#"><i className="fas fa-map-marker-alt" /></a> <span><strong>Come visit us:</strong> Directions to <a href="#">our location</a></span></li>
      </ul>
    </figure>
    <article className="one_half">
      <h6 className="heading">Purus nullam arcu integer</h6>
      <p className="nospace btmspace-15">Elementum nisi ac volutpat vestibulum enim mi tincidunt eros sed justo magna odio sed lacus ut non ante sit amet est luctus dictum ut dolor ac.</p>
      <form action="#" method="post">
        <fieldset>
          <legend>Newsletter:</legend>
          <input type="text" defaultValue placeholder="Name" />
          <input type="text" defaultValue placeholder="Email" />
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </article>
    {/* ################################################################################################ */}
  </section>
</div>
      




        {/* contact end */}
  <div>
    <div className="bgded overlay row4" style={{backgroundImage: 'url("images/demo/backgrounds/01.png")'}}>
      <footer id="footer" className="hoc clear"> 
        {/* ################################################################################################ */}
        <div className="one_quarter first">
          <h1 className="logoname"><a href="index.html">Chill<span>a</span>id</a></h1>
          <p>Scelerisque facilisis sapien turpis facilisis libero eu viverra purus dui ac leo sed vitae diam morbi sed nibh in eget dolor phasellus rhoncus odio morbi elit nunc id elit donec elementum [<a href="#">…</a>]</p>
          <ul className="faico clear">
            <li><a className="faicon-facebook" href="#"><i className="fab fa-facebook" /></a></li>
            <li><a className="faicon-google-plus" href="#"><i className="fab fa-google-plus-g" /></a></li>
            <li><a className="faicon-linkedin" href="#"><i className="fab fa-linkedin" /></a></li>
            <li><a className="faicon-twitter" href="#"><i className="fab fa-twitter" /></a></li>
            <li><a className="faicon-vk" href="#"><i className="fab fa-vk" /></a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Volutpat metus nullam</h6>
          <ul className="nospace linklist">
            <li><a href="#">Sagittis leo morbi quis</a></li>
            <li><a href="#">Nulla vehicula felis laoreet</a></li>
            <li><a href="#">Pulvinar proin et eros ac</a></li>
            <li><a href="#">Mi vulputate accumsan fusce</a></li>
            <li><a href="#">At massa in sed tortor sit amet</a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Tincidunt ullamcorper</h6>
          <ul className="nospace clear latestimg">
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
            <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt="" /></a></li>
          </ul>
        </div>
        <div className="one_quarter">
          <h6 className="heading">Fusce vel lectus nunc</h6>
          <ul className="nospace linklist">
            <li>
              <article>
                <p className="nospace btmspace-10"><a href="#">Lacinia donec tortor lectus varius vel egestas a dictum in odio mauris metus.</a></p>
                <time className="block font-xs" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
              </article>
            </li>
            <li>
              <article>
                <p className="nospace btmspace-10"><a href="#">Turpis iaculis ac hendrerit vel pretium non magna sed non metus ut at nisi morbi.</a></p>
                <time className="block font-xs" dateTime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
              </article>
            </li>
          </ul>
        </div>
        {/* ################################################################################################ */}
      </footer>
    </div>
    {/* ################################################################################################ */}
    {/* ################################################################################################ */}
    {/* ################################################################################################ */}
    <div className="wrapper row5">
      <div id="copyright" className="hoc clear"> 
        {/* ################################################################################################ */}
        <p className="fl_left">Copyright © 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
        <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
        {/* ################################################################################################ */}
      </div>
    </div>
    {/* ################################################################################################ */}
    {/* ################################################################################################ */}
    {/* ################################################################################################ */}
    <a id="backtotop" href="#top"><i className="fas fa-chevron-up" /></a>
  </div>
</div>

    );
  }
}