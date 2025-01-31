

export default function Footer() {

    return (
        <footer className="min-h-[50vh] text-white p-14 " >
            <div className="container mx-auto">
                <div className="grid grid-cols-5 w-full place-content-between p-1 gap-5 ">
                    <div className="flex flex-col gap-7 w-full" >
                        <h4 className="font-bold" >Product</h4>
                        <ul className="flex flex-col gap-4" >
                            <li>Pricing</li>
                            <li>Benefits</li>
                            <li>Features</li>
                            <li>Product Demo</li>
                            <li>Visual Builder</li>
                            <li>Dynamic Responses</li>
                            <li>Artificial intelligence</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7 w-full" >
                        <h4 className="font-bold" >Solutions</h4>
                        <ul className="flex flex-col gap-4" >
                            <li>Marketing</li>
                            <li>Customers Support</li>
                            <li>Sales</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7 w-full" >
                        <h4 className="font-bold" >Intégrations</h4>
                        <ul className="flex flex-col gap-4" >
                            <li>Chat widget</li>
                            <li>Live Chat</li>
                            <li>HelpDesk</li>
                            <li>Facebook Manager</li>
                            <li>Shopify</li>
                            <li>Slack</li>
                            <li>Zappier</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7 w-full" >
                        <h4 className="font-bold" >ChatBot Templates</h4>
                        <ul className="flex flex-col gap-4" >
                            <li>Marketing Templates</li>
                            <li>Sales Templates</li>
                            <li>Support Templates</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-7 w-full" >
                        <h4 className="font-bold " >Resources</h4>
                        <ul className="flex flex-col  gap-4" >
                            <li>Help Center</li>
                            <li>API & Developpers</li>
                            <li>ChatBot Academy</li>
                            <li>Blog </li>
                            <li>ChatBot Best Pratices</li>
                            <li>2022 ChatBot Guide</li>
                            <li>System Status</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row items-end justify-end gap-7 my-4" >
                    <a href="#"><i className="fa-brands fa-twitter text-3xl"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook text-3xl"></i></a>
                    <a href="#"><i className="fa-brands fa-github text-3xl"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube text-3xl"></i></a>
                </div>

                <p className="my-3" >Copyright &#169; 2022 LiveChat, Inc. All rights reserved </p>

            </div>
            <hr className="w-full my-4" />

            <p className=" w-[83%] " >
                Hi! We are glad to have you here! Before you start visiting our Site, please note that for the best user experience, we use Cookies. By continuing to browse our Site, you consent to the collection, use, and storage of cookies on your device for us and our partners. You can revoke your consent any time in your device browsing settings. Click “Cookies Policy” to check how you can control them through your device.
            </p>
        </footer>
    )
}