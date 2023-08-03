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
        "app.components.HomePage.welcomeBlock.content.again":
          "Welcome to Woodlands Transport Cms",
        "global.content-manager": "Content Builder",
      },
    },
    theme: {
      light: {
        colors: {
          primary100: "#faf7f7", //button select color
          primary200: "#9c9a9a", //background color
          primary500: "#e33939",
          primary600: "#000", //text color
          primary700: "#e33939", //border color
          danger700: "#b72b1a",
        },
      },
      dark: {
        colors: {
          primary100: "#757272", //button select color
          primary200: "#9c9a9a", //background color
          primary500: "#db3d3d",
          primary600: "#bfbbbb", //text color
          primary700: "#db3d3d", //border color
          danger700: "#b72b1a",
        },
      },
    },
    notifications: { releases: false },
    tutorials: false,
  },
  bootstrap(app) {
    document.title = "Woodlands Transport 2.0!";
  },
};
