import { Info } from "./detail.js";
import { Ui } from "./ui.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".navbar-links a").forEach((anchor) => {
         anchor.addEventListener("click", (e) => {
            document.querySelector(".navbar-links .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
      const loading = document.querySelector(".loading_screen");
      loading.classList.remove("d-none");
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();


      this.ui.displayGame(response);
      this.cardAction();
      loading.classList.add("d-none");
   }

   cardAction() {
      document.querySelectorAll(".card").forEach((card) => {
         card.addEventListener("click", () => {
            this.showDetails(card.dataset.id);
         });
      });
   }

   showDetails(gameId) {
      const details = new Info(gameId);
      document.querySelector(".game-library").classList.add("d-none");
      document.querySelector(".game-info").classList.remove("d-none");
   }
}
