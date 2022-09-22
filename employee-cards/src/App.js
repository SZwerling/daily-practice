import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";
import GroupedTeamMembers from "./GroupedTeamMembers";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import NotFound from "./NotFound";
import employeesArr from "./employeesArr";
import parseTeams from "./parseTeams";




function App() {
   //seState returns a pair of values,
   //the current state and a function that updates it.
   //we destructure is here with employees, setEmployees
   const [selectedTeam, selectTeam] = useState(
      JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
   );

   const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem("employeeList")) || employeesArr);

   useEffect(() => {
      localStorage.setItem("employeeList", JSON.stringify(employees));
   }, [employees]);

   useEffect(() => {
      localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
   }, [selectedTeam]);

   const handleTeamSelectionChange = (e) => {
      selectTeam(e.target.value);
   };

   const handleEmployeeCardClick = (e) => {
      const transfsormedEmployees = employees.map((employee) =>
         employee.id === parseInt(e.currentTarget.id) //ugly nested ternary operators
            ? employee.teamName === selectedTeam
               ? { ...employee, teamName: "" }
               : { ...employee, teamName: selectedTeam }
            : employee
      );

      setEmployees(transfsormedEmployees);
   };

   return (
      <Router>
         <Nav />
         <Header
            selectedTeam={selectedTeam}
            teamMemberCount={
               employees.filter(
                  (employee) => employee.teamName === selectedTeam
               ).length
            }
         />
         <Routes>
            <Route
               path="/"
               element={
                  <Employees
                     employees={employees}
                     selectedTeam={selectedTeam}
                     handleTeamSelectionChange={handleTeamSelectionChange}
                     handleEmployeeCardClick={handleEmployeeCardClick}
                  />
               }
            ></Route>
            <Route
               path="/GroupedTeamMembers"
               element={
                  <GroupedTeamMembers
                     employees={employees}
                     selectedTeam={selectedTeam}
                     setTeam={selectTeam}
                  />
               }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
