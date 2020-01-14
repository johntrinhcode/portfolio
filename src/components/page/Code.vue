<template>
  <div id="code" class="w-full h-full">
    <transition name="fade" mode="out-in">
      <ProjectDetail
        v-if="currentItem == 0"
        :key="0"
        :title="projects[currentItem].title"
        :date="projects[currentItem].date"
        :link="projects[currentItem].link"
        :gitlink="projects[currentItem].gitlink"
        :image="projects[currentItem].image"
      />
      <ProjectDetail
        v-else-if="currentItem == 1"
        :key="1"
        :title="projects[currentItem].title"
        :date="projects[currentItem].date"
        :link="projects[currentItem].link"
        :gitlink="projects[currentItem].gitlink"
        :image="projects[currentItem].image"
      />
      <ProjectDetail
        v-else-if="currentItem == 2"
        :key="2"
        :title="projects[currentItem].title"
        :date="projects[currentItem].date"
        :link="projects[currentItem].link"
        :gitlink="projects[currentItem].gitlink"
        :image="projects[currentItem].image"
      />
      <ProjectDetail
        v-else
        :key="3"
        :title="projects[currentItem].title"
        :date="projects[currentItem].date"
        :link="projects[currentItem].link"
        :gitlink="projects[currentItem].gitlink"
        :image="projects[currentItem].image"
      />
    </transition>
  </div>
</template>

<script>
import ProjectDetail from "../detail/ProjectDetail.vue";

export default {
  name: "Code",
  props: {
    changeImage: Function
  },
  components: {
    ProjectDetail
  },
  data() {
    return {
      currentItem: 0,
      projects: [
          {
          title: "Jurnul",
          description: "A web application that lets you record a log about your day and track your emotions.",
          implementation: {
            front: [
              "The visual design of this project was made in Figma.",
              "The frontend of this application is developed using the Vue.js framework. It handles state management using Vue's own Vuex solution. Routing within the application is also handled with Vue's Router solution.",
              "Tailwind CSS is the CSS framework of choice, allowing for rapid styling and protoyping throughout the development process."
            ],
            back: [
              "The backend of this application is developed with NodeJS using the Express.js framework.",
              "Authentication is implemented using JSON Web Token (JWT) authentication.",
              "MongoDB was the database of choice for holding user information."
            ],
            deployment: ["The backend API is deployed with Heroku.", "The Vue.js frontend is deployed with Netlify."]
          },

          image: require("../../assets/jurnul.png"),
          date: "December 2019 - January 2020",
          link: "https://jurnul.netlify.com/",
          gitlink: "https://github.com/johntrinhcode/jurnul-frontend",
          technologies: ["Vue.js", "Node"]
        },
        {
          title: "Portfolio",
          description: "A static website built to showcase the work that I do.",
          implementation: {
            front: [
              "The frontend of this application is developed using the Vue.js framework.",
              "Images utilize lazy-loading to improve user experience during wait times, seen in the 'Photo' section.",
              "Tailwind CSS is the CSS framework of choice, allowing for rapid styling and protoyping throughout the development process."
            ],
            deployment: ["The Vue.js frontend is deployed with Netlify."]
          },
          date: "December 2019",
          image: require("../../assets/portfolio.jpg"),
          link: "https://www.johntrinh.com",
          gitlink: "https://github.com/johntrinhcode/portfolio"
        },
        {
          title: "Bud.",
          description: "A web application that allows users to create their own garden designs and share with others.",
          implementation: {
            front: [
              "The frontend of this application was developed with the Vue.js framework.",
              "Googles Map API was used in our frontend to search between different locations and place location markers."
            ],
            back: [
              "The backend of this application was developed with NodeJs and the Express.js framework.",
              "MongoDB was the database of choice for holding user, design and plant information."
            ],
            deployment: [
              "This application is deployed onto an EC2 instance on AWS.",
              "A full CICD pipeline has been configured for this project via GitLab."
            ]
          },
          image: require("../../assets/bud.jpg"),
          date: "October 2019 - Present",
          link: "https://www.beediscovery.com",
          gitlink: "",
        },
        {
          title: "Gem",
          description:
            "A modular web widget built during my time as an intern at IBM. It is showcased on IBM's About Us page to deliver interesting historical information about the company.",
          implementation: {
            front: [
              "The frontend of this application is developed with Vue.js and was my first time working with the framework.",
              "Transitions/animations were made with Vue's built-in transition capabilities."
            ],
            back: [
              "The backend of this application is developed with NodeJS using the Express.js framework.",
              "Developed a REST API to execute basic CRUD operations on the MongoDB database."
            ],
            deployment: ["This application was deployed to IBM's own cloud solution and later on made it's way to their About Us page via Drupal."]
          },
          image: require("../../assets/gem.jpg"),
          date: "May 2019 - August 2019",
          link: "https://www.ibm.com/ibm/us/en/",
          gitlink: "",
        },
      ]
    };
  },
  methods: {
    goForward: function() {
      if (this.currentItem == this.projects.length - 1) {
        this.currentItem = 0;
      } else {
        this.currentItem += 1;
      }
    },
    goBackward: function() {
      if (this.currentItem == 0) {
        this.currentItem = this.projects.length - 1;
      } else {
        this.currentItem -= 1;
      }
    }
  }
};
</script>

<style scoped>
#explore-button {
  letter-spacing: 0.125rem;
}

.detail {
  line-height: 1;
}

.code-header {
  letter-spacing: 0.5rem;
}

#code {
  background: black;
}
</style>
