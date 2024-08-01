import React, { useEffect } from "react";

const ChatbotComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://fundacionipesmi.my.site.com/ESWWebUGD1704222990712/assets/js/bootstrap.min.js";
    script.onload = initEmbeddedMessaging;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function initEmbeddedMessaging() {
    console.log("initEmbeddedMessaging");
    try {
      console.log("initEmbeddedMessaging:Try");
      embeddedservice_bootstrap.settings.language = "es"; // For example, enter 'en' or 'en-US'

      embeddedservice_bootstrap.init(
        "00DHp000001rh2f",
        "Web_UGD",
        "https://fundacionipesmi.my.site.com/ESWWebUGD1704222990712",
        {
          scrt2URL: "https://fundacionipesmi.my.salesforce-scrt.com",
        }
      );
    } catch (err) {
      console.error("Error loading Embedded Messaging: ", err);
    }
  }

  return null;
};

export default ChatbotComponent;
