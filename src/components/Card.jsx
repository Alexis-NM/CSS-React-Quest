import React from "react";
import CardStyle from "./CardStyle.scss"
import RateStyle from "./RateStyle.scss"


function Card() {
    return (
     <figure>
        <h1>War On Drugs</h1>
        <h2>Lost In the Dream (2014)</h2>
    <img src="https://upload.wikimedia.org/wikipedia/en/0/0b/Lostinthedream.jpg" alt="Lost In The Dream" />
    <p>
        Rate this Album
    </p>
    <div class="rating">
        <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
        <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
        <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
        <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
        <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
    </div>
    </figure>
    )
}

export default Card