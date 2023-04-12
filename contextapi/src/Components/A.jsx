// import { useState } from "react";
// import B from "./B";
// import myContext from "./Context";

// function A(props) {
//   const [data, setData] = useState("Geekster");
//   const [childata, setChildData] = useState("");
//   return (
//     <div>
//       <h2>A Component</h2>
//       <p>Child Data :{childata}</p>
//       <button
//         onClick={() => {
//           setData("Kabir ");
//         }}
//       >
//         Send Data to D
//       </button>
//       <myContext.Provider value={[data, setChildData]}>
//         <B />
//       </myContext.Provider>
//     </div>
//   );
// }

// export default A;
import { useContext } from "react";
import myContext from "./Context";

import C from "./C";

function A(props) {
  let mydata = useContext(myContext);
  return (
    <div>
      <h2>
        B Component :<span style={{ color: "red" }}>{mydata}</span>
      </h2>
      <C />
    </div>
  );
}

export default A;