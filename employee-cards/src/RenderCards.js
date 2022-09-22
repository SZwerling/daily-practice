import TeamMemberCard from "./TeamMemberCard";

const RenderCards = ({employees, handleEmployeeCardClick, selectedTeam}) => {
    return(
        employees.map((employee) => (
           <TeamMemberCard key={employee.id} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam} employee={employee}/>
         ))
    )
   
}


export default RenderCards;