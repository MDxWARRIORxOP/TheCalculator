import { nanoid } from "nanoid";
import { getData } from ".";
import createLocalStore from "react-local-storage-manager";

const getId = () => {
  const store = createLocalStore("ID", (value) => value.toString(), "");
  const storedID = store.get();

  if (storedID) {
    console.log(`ID: ${storedID}`);
    return storedID;
  } else {
    const id = nanoid();
    store.set(id.toString());
    return id;
  }
};

const getHistory = (id) => {
  const data = getData("history", id);

  if (!data) return false;

  return data;
};

export { getId, getHistory };
