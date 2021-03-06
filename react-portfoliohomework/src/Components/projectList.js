import React from "react";
import projectOnePic from "../imgs/project1.png";
import Projectcontainer from "../Components/projectContainer";
import projectTwoPic from "../imgs/project2.png";



function Projectlist () {
   
    const projects : { image:any,  title:any, description:any, githublink:any } [] = [
        {
            "image": projectOnePic,
            "title": "MyCoolPlaylist",
            "description": "Simple app designed to allow users to create playlists, and view songs and their lyrics from many differnt popular artists and be served a youtube link",
            "githublink":"https://github.com/BrunoBBorges/Playlist-Creator"
        },
        {
            "image": projectTwoPic,
            "title":"Rate-it",
            "description":"An app designed to allow users to enter in something they would like to review, give it a rating from 1-5, ",
            "githublink" : "https://github.com/BrunoBBorges/rate-it",
        },
        {
            "title":"Covid Companion",
            "description":"An app designed to allow users to view covid information about their friends and family, and whoever else they may come in contact with.",
            "githublink": "https://github.com/BrunoBBorges/covid-companion",
        },
        {
            "title":"React-Directory",
            "description":"An app designed with react to have a user input data of an employee or person into a console, and have it appear and render online.",
            "githublink": "https://github.com/BrunoBBorges/React-Directory",
        },
        {
            "title":"Budget Tracker",
            "description":"An app designed to allow a user to track their transactions even offline, and push their offline transactions to the server when connection is available.",
            "githublink": "https://github.com/BrunoBBorges/Budget-Tracker",
        },
        {
            "title":"Workout Tracker",
            "description":"An app designed to allow athletes to track their workouts, whether it be cardio, weight training, or any other workout they might be doing.",
            "githublink": "https://github.com/BrunoBBorges/Workout-Tracker",
        }
        
    ];

    return (
        <main class="m5 center">
        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          {projects.map(project => {
            return Projectcontainer(project);
           })}
        </article>
      </main>
    );
}

export default Projectlist;