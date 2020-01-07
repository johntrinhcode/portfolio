<template>
  <div
    id="project-detail"
    class="h-full w-screen absolute z-50"
    @click="$emit('close-project-detail')"
  >
    <div id="project-detail-bg" class="h-full w-screen bg-black opacity-75 absolute"></div>
    <div class="w-full h-full flex items-center opacity-100">
      <div
        @click.stop
        class="relative w-64 md:w-128 h-128 flex flex-col bg-gray-600 mx-auto opacity-100 rounded-sm overflow-hidden"
      >
        <button
          id="view-project-button"
          class="absolute right-0 bottom-0 px-4 py-2 m-4 text-white rounded-sm"
        >
          <a :href="link" target="_blank" rel="noopener noreferrer">View</a>
        </button>

        <div id="project-image" class="w-full bg-red-700 overflow-hidden">
          <img :src="image" class="w-full h-full object-cover" />
        </div>
        <div id="project-details" class="w-full flex flex-col p-4 text-white font-body">
          <div class="font-head font-bold text-4xl">{{title}}</div>
          <div class="text-xs opacity-50">{{date}}</div>
          <div class="mt-4">{{description}}</div>
          <div
            v-if="info[currentProject].implementation"
            id="implementation-detail"
            class="w-full h-32 overflow-scroll mt-4 p-2"
          >
            <div>
              <div>
                <p class="text-sm font-bold ml-4">Frontend</p>
                <ul class="mt-2 ml-6">
                  <li v-for="detail in frontDetail" :key="detail" class="text-xs mt-2">- {{detail}}</li>
                </ul>
              </div>
              <div v-if="info[currentProject].implementation.back" class="mt-4">
                <p class="text-sm font-bold ml-4">Backend</p>
                <ul class="mt-2 ml-6">
                  <li v-for="detail in backDetail" :key="detail" class="text-xs">- {{detail}}</li>
                </ul>
              </div>
              <div class="mt-4">
                <p class="text-sm font-bold ml-4">Deployment</p>
                <ul class="mt-2 ml-6">
                  <li v-for="detail in deploymentDetail" :key="detail" class="text-xs">- {{detail}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  props: {
    currentProject: {
      required: true
    }
  },
  data() {
    return {
      info: {
        bud: {
          title: "Bud.",
          description:
            "A web application that allows users to create their own garden designs and share with others.",
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
          link: "https://www.beediscovery.com"
        },
        portfolio: {
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
          link: "https://www.johntrinh.com"
        },
        gem: {
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
            deployment: [
              "This application was deployed to IBM's own cloud solution and later on made it's way to their About Us page via Drupal."
            ]
          },
          image: require("../../assets/gem.jpg"),
          date: "May 2019 - August 2019",
          link: "https://www.ibm.com/ibm/us/en/"
        },
        jurnul: {
          title: "Jurnul",
          description:
            "A web application that lets you record a log about your day and track your emotions.",
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
            deployment: [
              "The backend API is deployed with Heroku.",
              "The Vue.js frontend is deployed with Netlify."
            ]
          },

          image: require("../../assets/jurnul.png"),
          date: "December 2019 - January 2019",
          link: "https://jurnul.netlify.com/",
          technologies: ["Vue.js", "Node"]
        }
      }
    };
  },
  computed: {
    title() {
      return this.info[this.currentProject].title;
    },
    description() {
      return this.info[this.currentProject].description;
    },
    link() {
      return this.info[this.currentProject].link;
    },
    date() {
      return this.info[this.currentProject].date;
    },
    image() {
      return this.info[this.currentProject].image;
    },
    frontDetail() {
      return this.info[this.currentProject].implementation.front;
    },
    backDetail() {
      return this.info[this.currentProject].implementation.back;
    },
    deploymentDetail() {
      return this.info[this.currentProject].implementation.deployment;
    }
  }
};
</script>

<style>
#project-image {
  height: 33%;
}
#project-details {
  height: 67%;
  line-height: 1;
  background-color: rgb(49, 49, 49);
}
#view-project-button {
  background-color: rgb(75, 75, 75);
}
#implementation-detail {
  background-color: #3f3f3f;
}
</style>