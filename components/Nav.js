import React from "react";

class Nav extends React.Component {
    render() {
        return <div className="w-full flex flex-row h-16 items-center bg-blue-400">
            <span>Home</span>
            <span>Projects</span>
            <span>Contact</span>
        </div>
    }
}

export default Nav;