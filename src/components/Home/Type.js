import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Practical Learner.",
          "MERN Stack Developer.",
          "A Problem Solver.",
          "An Innovative Thinker.",
          "A Football Fanatic!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
