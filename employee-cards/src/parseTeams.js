function parseTeams(employees, selectedTeam){
    let teams = [];
    const teamAMembers = [];
    const teamBMembers = [];
    const teamCMembers = [];
    const teamDMembers = [];

    

    employees.map((employee) =>{
        if(employee.teamName.includes('A')){
            teamAMembers.push(employee)
        }
        if(employee.teamName.includes('B')){
            teamBMembers.push(employee)
        }
        if(employee.teamName.includes('C')){
            teamCMembers.push(employee)
        }
        if(employee.teamName.includes('D')){
            teamDMembers.push(employee)
        }

    })

    let allTeams = [{
       team: "TeamA",
       members: teamAMembers,
       collapsed: selectedTeam === "TeamA" ? false : true,
    },
    {
        team: "TeamB",
        members: teamBMembers,
        collapsed: selectedTeam === "TeamB" ? false : true,
     },
     {
        team: "TeamC",
        members: teamCMembers,
        collapsed: selectedTeam === "TeamC" ? false : true,
     },
     {
        team: "TeamD",
        members: teamDMembers,
        collapsed: selectedTeam === "TeamD" ? false : true,
     }
]
    
    allTeams.map((team) => teams.push(team))

    console.log(teams)
    return teams;
  
}

export default parseTeams;




   