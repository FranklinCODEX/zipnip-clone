
import PropTypes from "prop-types";
import connectivity from "../assets/images/connectivity.png"

const TabContent = ({ activeTab }) => {
  return (
    <div className="w-full bg-white ">
      {activeTab === "connectivity" && (
        <div className="flex flex-row items-center gap-3 px-7" >
            <div className="flex items-start gap-10 flex-col" >
                <h3 className=" font-medium text-3xl" >Connect with your customers easily</h3>
                <p className="font-extralight w-[70%] text-lg" >Reach your customers wherever they are, no plug-ins required. Give your agents a truly channel agnostic platform: one screen with voice, email, social media, and messaging.</p>
                <button className="flex items-center text-lg gap-2 rounded-lg px-6 text-white py-2 bg-purple" >
                    Read more 
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <img src={connectivity} alt="" />
        </div>
      )}

      {activeTab === "automation" && (
        <div>
          <h2 className="text-xl font-semibold">Automation Tools</h2>
          <p className="text-gray-600">Automate your workflow efficiently.</p>
          <img
            src="https://via.placeholder.com/300"
            alt="Automation"
            className="mt-2 rounded-lg"
          />
        </div>
      )}

      {activeTab === "chatbot" && (
        <div>
          <h2 className="text-xl font-semibold">AI Chatbot</h2>
          <p className="text-gray-600">
            Enhance customer support with AI-powered chatbots.
          </p>
          <img
            src="https://via.placeholder.com/300"
            alt="Chatbot"
            className="mt-2 rounded-lg"
          />
        </div>
      )}

      {activeTab === "integration" && (
        <div>
          <h2 className="text-xl font-semibold">Third-Party Integration</h2>
          <p className="text-gray-600">
            Integrate with multiple services effortlessly.
          </p>
        </div>
      )}

      {activeTab === "marketing" && (
        <div>
          <h2 className="text-xl font-semibold">Marketing Tools</h2>
          <p className="text-gray-600">
            Boost engagement with powerful marketing strategies.
          </p>
        </div>
      )}

      {activeTab === "messenger" && (
        <div>
          <h2 className="text-xl font-semibold">Messenger Services</h2>
          <p className="text-gray-600">
            Communicate effectively with real-time messaging.
          </p>
        </div>
      )}

      {activeTab === "qa" && (
        <div>
          <h2 className="text-xl font-semibold">Quality Assurance</h2>
          <p className="text-gray-600">
            Ensure top-notch product quality with our QA tools.
          </p>
        </div>
      )}
    </div>
  );
};

TabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default TabContent;
