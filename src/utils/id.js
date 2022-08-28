import { nanoid } from "nanoid";
import { getData } from ".";

const getId = () => {
  const storedID = localStorage.getItem("ID");

  if (storedID) {
    console.log(`ID: ${storedID}`);
    return storedID;
  } else {
    const id = nanoid();
    localStorage.setItem("ID", id);
    return id;
  }
};

const getHistory = (id) => {
  const data = getData("history", id);

  return data;
};

export { getId, getHistory };
