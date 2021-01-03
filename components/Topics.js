import React from 'react';
import TopicContent from './TopicContent'
import { TransitionGroup, CSSTransition, SwitchTransition} from 'react-transition-group'

export default function Topics() {
    const [topic, setTopic] = React.useState('projects');
  
    const selectedStyle = (elementTopic) => {
      if (elementTopic === topic) {
        return "font-semibold text-xl mt-8 cursor-pointer transition-all duration-500 text-indigo-600"
      } else {
        return "font-semibold text-xl mt-8 cursor-pointer transition-all duration-500"
      }
    }
  
    return (
      <div className="flex-1 flex flex-col">
        <div className="relative flex flex-row space-x-2">
          <h2 onClick={() => setTopic("projects")} className={selectedStyle("projects")}>
              Projects
          </h2>
          <h2 onClick={() => setTopic("skills")} className={selectedStyle("skills")}>
              Skills
          </h2>
          <h2 onClick={() => setTopic("timeline")} className={selectedStyle("timeline")}>
              Timeline
          </h2>
        </div>

        <TopicContent topic={topic} />
      </div>
    );
  };