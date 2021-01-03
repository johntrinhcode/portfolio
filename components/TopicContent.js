
import React from 'react';
import { SiGithub } from 'react-icons/si'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


export default function TopicContent({ topic }) {
  const [listStyle, setListStyle] = React.useState({ maxHeight: '300px'});

    const projects = [
      { name: "Project 1", description: "Description 1", link: "https://www.github.com" },
      { name: "Project 2", description: "Description 2", link: "https://www.github.com" },
      { name: "Project 3", description: "Description 3", link: "https://www.github.com" },
    ];
  
    const skills = [
      { name: "Frontend", items: ["Vue", "React", "Angular", "Tailwind CSS", "Vega"] },
      { name: "Backend", items: ["Express.js", "Java Spring", "MongoDB", "SQL"] }
    ];

    const events = [
      {
        name: "IBM Internship",
        subtitle: "Full Stack Developer Intern",
        startYearMonth: "May 2019",
        endYearMonth: "Aug 2019",
        description: "My first experience working with a real team and diving into web technologies which I found to really enjoy."
      },
      {
        name: "Graduated University",
        startYearMonth: "Aug 2017",
        endYearMonth: "May 2020",
        subtitle: "BS in Computer Science",
        description: "I graduated university, about time!"
      },
      {
        name: "Counterpointe Solutions",
        startYearMonth: "July 2020",
        endYearMonth: "Current",
        subtitle: "Junior Full Stack Developer",
        description: "My first job out of university and where I'm currently at!"
      },
    ];

    let topicContentList;

    if (topic === "projects") {
      topicContentList = projects.map((project, index) => (
        <div key={project.name} className="md:flex-1 flex flex-col mt-4 bg-indigo-200 p-4 rounded-md" >
          <h3 className="w-full flex flex-row items-center">
            <span className="flex-1 font-semibold">
              {project.name}
            </span>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </h3>
          <p className="text-sm text-gray-500">{project.description}</p>
        </div>
      ));
    } else if (topic === "skills") {
      topicContentList = skills.map((skillCategory, index) => (
        <div key={skillCategory.name} className="flex flex-col mt-4 bg-indigo-200 p-4 rounded-md md:flex-1">
          <h3 className="font-semibold">
            {skillCategory.name}
          </h3>
          <ul>
            {
              skillCategory.items.map((item, innerIndex) => (
                <p key={item} className="text-sm text-gray-500">{item}</p>
              ))
            }
          </ul>
        </div>
      ));
    } else {
      topicContentList = events.map((event, index) => (
        <div key={event.name} className="flex flex-col mt-4 bg-indigo-200 p-4 rounded-md md:flex-1">
            <h3 className="w-full flex flex-col leading-none">
              <span className="font-semibold">{event.name}</span>
              <span className="text-xs text-gray-500">{event.subtitle}</span>
              <span className="font-normal text-xs text-gray-500">{event.startYearMonth} - {event.endYearMonth}</span>
            </h3>
            <span className="mt-4 md:text-sm">{event.description}</span>
        </div>
      ));
    }

    function setListHeight(topic) {
      console.log("ENTERING: " + topic)
      if (topic === 'projects') {
        setListStyle({ maxHeight: '300px'});

      } else if (topic === 'skills') {
        setListStyle({ maxHeight: '350px'});

      } else if (topic === 'timeline') {
        setListStyle({ maxHeight: '550px'});
      }
    }

    function setListHeightLeaving() {
      console.log("LEAVING: " + topic)
      if (topic === 'projects') {
        setListStyle({ maxHeight: '300px'});

      } else if (topic === 'skills') {
        setListStyle({ maxHeight: '350px'});

      } else if (topic === 'timeline') {
        setListStyle({ maxHeight: '550px'});
      }
    }

    function collapse() {
      
    }
  
    return (
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={topic}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            onEntering={() => setListHeight(topic)}
            onExiting={() => setListHeightLeaving(topic)}
            classNames='list-transition'>
            <ul style={listStyle} className="w-full flex flex-col test">
              { topicContentList }
            </ul>
          </CSSTransition>
        </SwitchTransition>
    );
  };
  