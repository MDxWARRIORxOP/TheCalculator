import React from "react";
import * as uniux from "uniux";
import appConfig from "../components/appConfigs";
import { getHistory } from "../utils/id";
import { getId } from "../utils/id";

const history = () => {
  const id = getId();
  const data = getHistory();



  return (
    <uniux.Main
      pageType="columnedApp"
      appConfig={appConfig}
      pageConfig={appConfig.pageConfigs.history}
    >
      <h1>History:</h1>
      {getHistory()}
    </uniux.Main>
  );
};
