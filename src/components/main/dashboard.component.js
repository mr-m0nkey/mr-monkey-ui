import React, { Component } from "react";
import { Link  } from "react-router-dom";

export default class Dashboard extends Component {



  render() {

    return (
       <div>
        <div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="bgded overlay" style={{backgroundImage: 'url("images/demo/backgrounds/01.png")'}}>
    <div id="pageintro" className="hoc clear"> 
      {/* ################################################################################################ */}
      <article>
        <h3 className="heading">Faucibus porttitor metus</h3>
        <p>In nibh nullam egestas velit laoreet nullam elementum ipsum pharetra suscipit leo augue pretium felis nisl vitae ipsum curabitur quis libero.</p>
        <footer><a className="btn" href="#">Tristique vehicula</a></footer>
      </article>
      {/* ################################################################################################ */}
    </div>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row3">
    <main className="hoc container clear"> 
      {/* main body */}
      {/* ################################################################################################ */}
      <section id="introblocks">
        <ul className="nospace group btmspace-80 elements elements-four">
          <li className="one_quarter">
            <article><a href="#"><i className="fas fa-hand-rock" /></a>
              <h6 className="heading">Feugiat fermentum</h6>
              <p>Ac orci proin porttitor lacus eget mi pellentesque non.</p>
            </article>
          </li>
          <li className="one_quarter">
            <article><a href="#"><i className="fas fa-dove" /></a>
              <h6 className="heading">Malesuada accumsan</h6>
              <p>Sapien sed metus congue sodales vivamus scelerisque.</p>
            </article>
          </li>
          <li className="one_quarter">
            <article><a href="#"><i className="fas fa-history" /></a>
              <h6 className="heading">Mauris placerat</h6>
              <p>Et interdum vulputate purus nisl fringilla sapien quis.</p>
            </article>
          </li>
          <li className="one_quarter">
            <article><a href="#"><i className="fas fa-heartbeat" /></a>
              <h6 className="heading">Elementum rhoncus</h6>
              <p>Sollicitudin dui mauris dui nunc lorem tortor pharetra.</p>
            </article>
          </li>
        </ul>
      </section>
      {/* ################################################################################################ */}
      <section className="group shout">
        <figure className="one_half first"><img src="images/demo/546x356.png" alt="" />
          <figcaption className="heading"><a href="#">Accumsan placerat</a></figcaption>
        </figure>
        <figure className="one_half"><img src="images/demo/546x356.png" alt="" />
          <figcaption className="heading"><a href="#">Scelerisque etiam</a></figcaption>
        </figure>
      </section>
      {/* ################################################################################################ */}
      {/* / main body */}
      <div className="clear" />
    </main>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="bgded overlay light" style={{backgroundImage: 'url("images/demo/backgrounds/01.png")'}}>
    <section id="services" className="hoc container clear"> 
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <p className="nospace font-xs">Quis leo hendrerit lectus morbi</p>
        <h6 className="heading font-x2">Justo mauris tempus pharetra</h6>
      </div>
      <ul className="nospace group elements elements-three">
        <li className="one_third">
          <article><a href="#"><i className="fas fa-hourglass-half" /></a>
            <h6 className="heading">Sociis natoque penatibus</h6>
            <p>Interdum at congue semper purus nullam quis odio id justo accumsan ullamcorper maecenas vel arcu nulla tincidunt elit ornare.</p>
          </article>
        </li>
        <li className="one_third">
          <article><a href="#"><i className="fas fa-paw" /></a>
            <h6 className="heading">Magnis parturient montes</h6>
            <p>Urna proin venenatis eros viverra ultrices fringilla lectus urna consequat erat eget scelerisque ligula felis nec neque nam.</p>
          </article>
        </li>
        <li className="one_third">
          <article><a href="#"><i className="fas fa-sliders-h" /></a>
            <h6 className="heading">Nascetur ridiculus aenean</h6>
            <p>Vitae ipsum vitae velit porttitor aliquam in quam aliquam ullamcorper sem a auctor dapibus nisi nunc vehicula nunc quis mattis.</p>
          </article>
        </li>
        <li className="one_third">
          <article><a href="#"><i className="fas fa-tty" /></a>
            <h6 className="heading">Ullamcorper neque phasellus</h6>
            <p>Pede turpis at elit nunc at urna sed ligula vivamus vel erat at diam imperdiet pharetra quisque justo turpis mattis ut vitae.</p>
          </article>
        </li>
        <li className="one_third">
          <article><a href="#"><i className="fas fa-table" /></a>
            <h6 className="heading">Aliquet lacus nulla erat</h6>
            <p>Tortor aenean leo ipsum elementum non cursus eu interdum ut risus proin risus nibh viverra eget lobortis feugiat egestas in nisl.</p>
          </article>
        </li>
        <li className="one_third">
          <article><a href="#"><i className="fas fa-hand-holding-usd" /></a>
            <h6 className="heading">Aliquam volutpat curabitur</h6>
            <p>Fusce dignissim neque vitae justo aenean ac urna et leo posuere pretium nunc bibendum enim quis imperdiet elementum dui dolor.</p>
          </article>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row3">
    <section className="hoc container clear"> 
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <p className="nospace font-xs">Rutrum erat nec mollis augue mauris</p>
        <h6 className="heading font-x2">Ac pede phasellus commodo</h6>
      </div>
      <ul className="pr-charts nospace group center">
        <li className="pr-chart-ctrl" data-animate="false">
          <div className="pr-chart" data-percent={25}><i /></div>
          <p>Porttitor</p>
        </li>
        <li className="pr-chart-ctrl" data-animate="false">
          <div className="pr-chart" data-percent={50}><i /></div>
          <p>Condimentum</p>
        </li>
        <li className="pr-chart-ctrl" data-animate="false">
          <div className="pr-chart" data-percent={75}><i /></div>
          <p>Sollicitudin</p>
        </li>
        <li className="pr-chart-ctrl" data-animate="false">
          <div className="pr-chart" data-percent={100}><i /></div>
          <p>Venenatis</p>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper gradient">
    <div className="hoc container clear"> 
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <p className="nospace font-xs">Purus ut mi sed velit urna ut</p>
        <h6 className="heading font-x2">Sapien posuere in iaculis</h6>
      </div>
      <ul className="nospace group team">
        <li className="one_third first">
          <figure><a className="imgover" href="#"><img src="images/demo/348x400.png" alt="" /></a>
            <figcaption><strong>A. Doe</strong> <em>Euismod nec hendrerit</em></figcaption>
          </figure>
        </li>
        <li className="one_third">
          <figure><a className="imgover" href="#"><img src="images/demo/348x400.png" alt="" /></a>
            <figcaption><strong>B. Doe</strong> <em>Vel velit aliquam massa</em></figcaption>
          </figure>
        </li>
        <li className="one_third">
          <figure><a className="imgover" href="#"><img src="images/demo/348x400.png" alt="" /></a>
            <figcaption><strong>C. Doe</strong> <em>Vulputate aliquet purus</em></figcaption>
          </figure>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </div>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper coloured">
    <section id="testimonials" className="hoc container clear"> 
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <p className="nospace font-xs">Maecenas ultrices faucibus felis</p>
        <h6 className="heading font-x2">Nunc lacus nulla luctus duis</h6>
      </div>
      <article className="one_half first">
        <figure className="clear"><img src="images/demo/100x100.png" alt="" />
          <figcaption>
            <h6 className="heading">D. Doe</h6>
            <em>Adipiscing fusce eu velit</em></figcaption>
        </figure>
        <blockquote>Pulvinar tortor quis nisi in hac habitasse platea dictumst donec ac tellus fusce venenatis laoreet elit sed est tortor molestie in consectetuer fringilla suscipit ut odio ut ac.</blockquote>
      </article>
      <article className="one_half">
        <figure className="clear"><img src="images/demo/100x100.png" alt="" />
          <figcaption>
            <h6 className="heading">E. Doe</h6>
            <em>Mauris erat aliquam leo</em></figcaption>
        </figure>
        <blockquote>Orci vitae dolor scelerisque blandit morbi eu dui sed volutpat etiam leo leo bibendum vel dictum sed sollicitudin a mi pellentesque ligula nulla facilisi sed bibendum ornare.</blockquote>
      </article>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  <div className="wrapper row3">
    <section className="hoc container clear"> 
      {/* ################################################################################################ */}
      <div className="sectiontitle">
        <p className="nospace font-xs">Lorem aenean nunc aenean sagittis</p>
        <h6 className="heading font-x2">Imperdiet massa maecenas</h6>
      </div>
      <ul id="latest" className="nospace group">
        <li className="one_third first">
          <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt="" /></a>
            <ul className="nospace meta clear">
              <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
              <li><i className="fas fa-comments" /> <a href="#">Comments (3)</a></li>
            </ul>
            <div className="excerpt">
              <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
              <p className="heading"><a href="#">Quam justo suscipit at blandit at blandit vitae tellus maecenas</a></p>
            </div>
          </article>
        </li>
        <li className="one_third">
          <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt="" /></a>
            <ul className="nospace meta clear">
              <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
              <li><i className="fas fa-comments" /> <a href="#">Comments (6)</a></li>
            </ul>
            <div className="excerpt">
              <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
              <p className="heading"><a href="#">Commodo mauris a semper posuere sem arcu cursus felis non cursus</a></p>
            </div>
          </article>
        </li>
        <li className="one_third">
          <article><a className="imgover" href="#"><img src="images/demo/348x261.png" alt="" /></a>
            <ul className="nospace meta clear">
              <li><i className="fas fa-user" /> <a href="#">Admin</a></li>
              <li><i className="fas fa-comments" /> <a href="#">Comments (10)</a></li>
            </ul>
            <div className="excerpt">
              <time dateTime="2045-04-03T08:15+00:00">03 Apr 2045</time>
              <p className="heading"><a href="#">Enim odio in odio suspendisse commodo suscipit nisi nam tellus</a></p>
            </div>
          </article>
        </li>
      </ul>
      {/* ################################################################################################ */}
    </section>
  </div>
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
  {/* ################################################################################################ */}
</div>

      </div>   
   
    );
  }
}