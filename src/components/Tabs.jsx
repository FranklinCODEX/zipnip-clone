

import { useState } from "react";
import TabList from "./TabList";
import TabContent from "./TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("connectivity");

  return (
    <>
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </>

  );
};

export default Tabs;
