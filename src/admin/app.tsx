import favicon from "./extensions/favicon.ico";
import Authlogo from "./extensions/authlogo.png";
export default {
  config: {
    auth: {
      logo: Authlogo,
    },
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Woodlands Transport 2.0!",
        "Auth.form.email.placeholder": "e.g. kai@email.com",
        "Auth.form.welcome.subtitle": "Log in With Your Credentials",
        "Auth.form.username.label": "Email",
        "app.components.LeftMenu.navbrand.title": "Woodlands Transport",
        "app.components.LeftMenu.navbrand.workplace":
          "Content Management System",
        "app.components.HomePage.welcome.again": "Hello,Welcome to WTS CMS👋",
        "app.components.HomePage.welcomeBlock.content.again": "",
        "global.content-manager": "Content Builder",
        "app.components.BlockLink.cloud": "",
      },
    },
    theme: {
      colors: {
        primary100: "#faf7f7", //button select color
        primary200: "#9c9a9a", //background color
        primary500: "#eb5050",
        primary600: "#000", //text color
        primary700: "#eb5050", //border color
        danger700: "#b72b1a",
      },
    },
  },
  tutorials: false,
  notifications: { releases: false },
  bootstrap(app) {
    document.title = "Woodlands Transport 2.0!";
  },
};
