import {useState} from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    const showStory = false;
    const xItem = ["Willy Goblin","Big Daddy","Father Christmas"];
    const yItem = ["the soup kitchen","Disneyland","the White House"];
    const zItem = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    const ukus = "us";
    const [name, setName] = useState("Chris");
    function handleClick() {
      const inputName = prompt("名前を入力して下さい");
      setName(inputName);
    }
    return (
      <>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <p onClick={handleClick}>Player 1: {name}</p>;
        <input type="text" placeholder="" />
        </div>
        <div>
          <label htmlFor="us">US</label>
          <input type="radio" value="us" checked={ukus === "us"} />
          <label htmlFor="uk">UK</label>
          <input type="radio" value="uk" checked={ukus === "uk"} />
        </div>
        <div>
          <button>Generate random story</button>
        </div>
        {showStory && (
          <p>
            It was 94 fahrenheit outside, so {randomValueFromArray(xItem)} went for a walk. When they
            got to {randomValueFromArray(yItem)}, they stared in horror for a few moments, then {randomValueFromArray(zItem)}.
            Bob saw the whole thing, but was not surprised — {randomValueFromArray(xItem)} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
      </>
    );
  }