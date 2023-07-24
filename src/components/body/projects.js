import loginCountryList from "../images/login_country.png";
import userProfile from "../images/user_profiles.png";
import addContact from "../images/add_contact_list.png";
import subscription from "../images/subscription_page.png";
import weatherApp from "../images/weather_app.png";

const projects = [
  {
    name: "Find search place weather conditions",
    url: "https://muad1105.github.io/weather-app-update/",
    desc: "User can serach for place to display the current weather and 5 dats forecasted weather",
    toolset: ["React Hooks", "Rest API", "axios"],
    image: weatherApp,
  },
  {
    name: "Profile Page for users from List of users",
    url: "https://muad1105.github.io/display_users/#/accounts",
    desc: "A list of users are being displayed, On selecting each users - the profile page is displayed, Chat component is present, Logout from user profile view",
    toolset: ["Redux-toolkit", "react-router-dom", "SCSS"],
    image: userProfile,
  },
  {
    name: "Add a list of contacts",
    url: "https://muad1105.github.io/contacts_add/",
    desc: "User can be added and the list of Users are displayed",
    toolset: [
      "Typescript",
      "react-router-dom",
      "ChartJS",
      "Redux",
      "Axios",
      "Tailwind",
    ],
    image: addContact,
  },
  {
    name: "Subscription Page",
    url: "https://muad1105.github.io/subscription-plan/",
    desc: "A user can choose a subscription plan and the payment including GST is been dispalayed to have payment option",
    toolset: ["React Hooks", "react-router-dom", "Redux", "SCSS"],
    image: subscription,
  },
];

export default projects;
