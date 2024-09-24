import React, { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch("members.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data));
  }, []);
  return (
    <div className="">
      <div className="text-center space-y-5 my-16">
        <h5 className="text-xl font-bold text-[#ff3811]">Team</h5>
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {teamMembers.map((member, idx) => (
          <TeamMember key={idx} member={member}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default Team;
