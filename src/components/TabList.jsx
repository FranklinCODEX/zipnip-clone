
import PropTypes from 'prop-types';


export default function TabList({ activeTab, setActiveTab }) {
  const tabs = [
    "connectivity",
    "automation",
    "chatbot",
    "integration",
    "marketing",
    "messenger",
    "qa",
  ];

  return (
    <ul className="flex gap-10 w-full lg:overflow-hidden  overflow-x-scroll pb-2">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`cursor-pointer ease-in-out duration-100 hover:border-b-2 hover:border-purple ${
            activeTab === tab
              ? "border-b-2 border-purple text-purple font-semibold"
              : ""
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </li>
      ))}
    </ul>
  );
}

TabList.propTypes = {
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
  };