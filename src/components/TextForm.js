import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;

  const handleUpClick = () => {
    // console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was Clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  // copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  // Function to count Vowels:
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
    props.showAlert("Vowels Calculated!", "success");
  };

  // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    props.showAlert("Consonants Calculated!", "success");
  };

  //on change function
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert To LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleVoClick}
        >
          Count no. of Vowels
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-1 my-1"
          onClick={handleCoClick}
        >
          Count no. of Consonants
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.mode} mx-1 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>
      <div
        disabled={text.length === 0}
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
      </div>
    </>
  );
}
