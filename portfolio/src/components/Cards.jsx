import React from "react";
import "../css/cards.css";

const Card = () => {
  return (
    <div className="container">
      <h2 className="text-center">Projects</h2>
      <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Netflix Clone</h2>
            <p class="copy">
              Its Api is from TMDB site! Made by only React and Bootstrap
            </p>
            <a href="https://neflix-git-main-sohibdev.vercel.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Todo LIst</h2>
            <p class="copy">React, Bootstrap, Css</p>
            <a href="https://todo-list0101.netlify.app">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Twitter Clone</h2>
            <p class="copy">React, Tailwind</p>
            <a href="https://6435b6d3878bf62d60b635c3--stalwart-cat-42e4db.netlify.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Uzum Clone</h2>
            <p class="copy">Uzum Market clone site! HTML, Css, JS</p>
            <a href="https://bejewelled-creponne-bce146.netlify.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Countries</h2>
            <p class="copy">React, Bootstrap</p>
            <a href="https://countries0101.netlify.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">E-Commerce</h2>
            <p class="copy">HTML, CSS</p>
            <a href="https://ecommerse0101.netlify.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">BookStore</h2>
            <p class="copy">HTML, CSS, JS</p>
            <a href="https://bookstore0101.netlify.app/#">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">My Team</h2>
            <p class="copy">HTML, CSS</p>
            <a href="https://mysite0101.netlify.app/">
              <button class="btn">View</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
