import React, { useState } from "react";

import explorer from "./data/folderdata";
import Folder from "./Component/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
