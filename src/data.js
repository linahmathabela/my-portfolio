import cart from './img/cart.png';
import chatApp from "./img/chat-app.png";
import searchUp from './img/search-up.png';
import calculator from './img/calculator.png';
import rock from './img/rock-paper-scissors.png';
import weather from './img/weather.png'
export const products = [
    {
      id: 1,
      img: `${cart}`,
      link: "https://linahmathabela.github.io/cart/",
      disc: <p>Developed a cart application using HTML, CSS,JavaScript and React.
        Integrated with a shopping API to display real-time products. 
        Demonstrated proficiency in making API requests and handling JSON data.
      
      </p>,
    },
    {
      id: 2,
      img: `${searchUp}`,
      link: "https://linahmathabela.github.io/search-up/",
      disc: <p>Developed a  application using HTML, CSS, JavaScript and React that allows users to search up cocktails with information on the drink.
      Integrated with an API to display  information based on user's drink input.
      Demonstrated proficiency in making API requests and handling JSON data.</p>
    },
    {
      id: 3,
      img: `${chatApp}`,
      link: "https://linahmathabela.github.io/chat-app/",
      disc: <p>- Developed a chat application using HTML, CSS, JavaScript ,React.Integrated with firebase for user authentication and storage
      Demonstrated proficiency in handling user information. </p>
    },

    {
      id: 4,
      img: `${calculator}`,
      link: "https://linahmathabela.github.io/calculator/",
      disc: <p>Developed a calculator using HTML, CSS, and JavaScript.
      Used JavaScript for the logic of the calculations</p>
    },
    {
      id: 5,
      img: `${weather}`,
      link: "https://linahmathabela.github.io/weather-app/",
      disc: <p>Developed a weather application using HTML, CSS, and JavaScript.
      Integrated with a weather API to display real-time weather information based on user input.
      Demonstrated proficiency in making API requests and handling JSON data.
   </p>
    },
    {
      id: 6,
      img: `${rock}`,
      link: "https://linahmathabela.github.io/rock-paper-scissors/",
      disc: <p>Developed a rock-paper-scissors game using HTML, CSS, and JavaScript.
        The user plays against the computer which picks between rock paper and scissors randomly
      </p>
    },
  ];