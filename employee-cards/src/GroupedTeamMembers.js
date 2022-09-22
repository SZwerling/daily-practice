import { useState } from "react";
import parseTeams from "./parseTeams";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
   const [groupedEmployees, setGroupedData] = useState(parseTeams(employees, selectedTeam));



   function handleTeamClick(event){
      let transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? {...groupedData, collapsed: !groupedData.collapsed} : groupedData )
      setGroupedData(transformedGroupData)
      setTeam(event.currentTarget.id)
   }

   return (
      <header className="container">
         {groupedEmployees.map((item) => {
            return (
               <div key={item.team} className="card mt-2">
                  <h4
                     id={item.team}
                     className="card-header text-secondary bg-white"
                     onClick={handleTeamClick}
                  >
                     Team Name: {item.team}
                  </h4>
                  <div
                     id={"collapse_" + item.team}
                     className={item.collapsed === true ? "collapse" : ""}
                  
                  ><hr/>
                  {item.members.map((member) => {
                     return(
                        <div key={member.id} className="mt-2">
                           <h5 className="card-title mt-2">
                              <span className="text-dark">Full Name: {member.fullName}</span>
                           </h5>
                           <p>Designation: {member.designation}</p>
                        </div>
                     )
                  })}
                  
                  </div>
               </div>
            );
         })}
      </header>
   );
};

export default GroupedTeamMembers;
