import React from 'react';
import img from "@site/static/img/lucky_robber_med.png"

let styles = {
  textAlign: "center",
}


export default function HomepageFeatures() {
  return (
    <section style={styles}>
      <img src={img} />
      <p>This project was originally created by team <strong>The Lucky Robbers</strong>!</p>
      <ul>
        <li>Jonathan Ames</li>
        <li>Sam Amodeo-Chavez</li>
        <li>Morrie T Bradley</li>
        <li>Kevan O’Connell</li>
        <li>Tatiana Soutar</li>
      </ul>
      <p>For completion of University of Washington's <a href="https://www.pce.uw.edu/certificates/professional-technical-writing">Certificate in Professional Technical Writing</a>.</p>
    </section>
  );
}
