import * as uniux from "uniux";
import * as math from "mathjs";
import React, { useRef } from "react";
import appConfig from "../components/appConfigs/index.js";

const IndexPage = () => {
  let interval;
  const resultRef = useRef(null);

  const meth = (e) => {
    e.preventDefault();
    clearInterval(interval);
    try {
      const result = math.evaluate(e.target[0].value);

      resultRef.current.textContent = result;
    } catch (error) {
      console.log(error);

      resultRef.current.textContent = error;
    }

    e.target[0].value = "";

    interval = setInterval(() => {
      resultRef.current.textContent =
        "Click on The Button Above For Math Answers!";
    }, 10000);
  };

  return (
    <uniux.Main
      pageType="columnedApp"
      appConfig={appConfig}
      page={appConfig.pageConfigs.calc}
    >
      <h1>Welcome to The Calculator!</h1>
      {/* TODO: 
      <div>
        <h1>History:</h1>
      </div> */}
      <form onSubmit={meth}>
        <input type="text" placeholder="1 + 1" required />
        <button type="submit">Check Answer</button>
      </form>
      <br />
      <div>
        <h1 ref={resultRef}>Click on The Button Above For Math Answers!</h1>
      </div>
    </uniux.Main>
  );
};

export default IndexPage;
