import * as uniux from "uniux";
import * as math from "mathjs";
import React, { useRef } from "react";
import appConfig from "../components/appConfigs/index.js";
import { addData, getData } from "../utils/index.js";
import * as styles from "../styles/index.module.css";
import * as fs from "fs";
import { nanoid } from "nanoid";
import { getId } from "../utils/id.js";
import { getHistory } from "../utils/id.js";

const IndexPage = () => {
  const id = getId();
  const resultRef = useRef(null);

  // const addHistory = (history) => {
  //   console.log(history);
  //   React.createElement("div", { class: styles.historyDiv }, [
  //     React.createElement("h3", { class: styles.histroyHeading }, ""),
  //     Raect.createElement("p", { class: styles.histroyPara }, ""),
  //   ]);
  // };

  let interval;
  const meth = (e) => {
    e.preventDefault();
    clearInterval(interval);
    let result;
    try {
      result = math.evaluate(e.target[0].value);

      resultRef.current.textContent = result;
    } catch (error) {
      console.log(error);

      resultRef.current.textContent = error;
    }

    e.target[0].value = "";

    const data = getHistory(id);

    let array = [];
    if (data.array.length == 0) {
      array.push({
        equation: e.target[0].value,
        answer: result,
      });
    } else {
      array = [
        ...data.array,
        {
          equation: e.target[0].value,
          answer: result,
        },
      ];
    }

    addData("history", id, {
      array,
    });

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
