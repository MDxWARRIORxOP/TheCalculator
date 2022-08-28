import React from "react";
import * as uniux from "uniux";
import { appConfig } from "../components/appConfigs/index.js";
import { getHistory } from "../utils/id";
import { getId } from "../utils/id";

const history = () => {
  const id = getId();
  const data = getHistory(id);

  return (
    <uniux.Main
      pageType="columnedApp"
      appConfig={appConfig}
      pageConfig={appConfig.pageConfigs.history}
    >
      <h1>History:</h1>
      <h3>1 + 1 / 5 * 50</h3>
      <p>11</p>
    </uniux.Main>
  );
};

export default history;
