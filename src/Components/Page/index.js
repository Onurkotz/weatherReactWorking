import { useState } from "react";
import Navbar from "../Navbar/index";
import Main from "../Main/index";

//import Styles from "../../style.css"

function Page() {
  const [province, setProvince] = useState([
    {
      city: "",
    },
  ]);

  return (
    <div>
      <Navbar city={province} addCity={setProvince} />
      <Main city={province} />
    </div>
  );
}

export default Page;
