import { nanoid } from "nanoid";
import { useCookies } from "react-cookie";
import { getData } from ".";

const getId = () => {
  const id = nanoid(19);
  const [cookies, setCookie] = useCookies(["ID"]);
  if (cookies.ID) {
    return cookies.ID;
  }

  setCookie("ID", id);
  return id;
};

const getHistory = (id) => {
  const data = getData("history", id);

  return data;
};

export { getId, getHistory };
