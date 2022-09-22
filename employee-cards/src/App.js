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

function App() {
   //seState returns a pair of values,
   //the current state and a function that updates it.
   //we destructure is here with employees, setEmployees
   const [selectedTeam, selectTeam] = useState(
      JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
   );

   const [employees, setEmployees] = useState(
      JSON.parse(localStorage.getItem("employeeList")) || [
         {
            id: 1,
            fullName: "Bob Jones",
            designation: "JavaScript Developer",
            gender: "male",
            teamName: "TeamA",
         },
         {
            id: 2,
            fullName: "Jill Bailey",
            designation: "Node Developer",
            gender: "female",
            teamName: "TeamA",
         },
         {
            id: 3,
            fullName: "Gail Shepherd",
            designation: "Java Developer",
            gender: "female",
            teamName: "TeamA",
         },
         {
            id: 4,
            fullName: "Sam Reynolds",
            designation: "React Developer",
            gender: "male",
            teamName: "TeamB",
         },
         {
            id: 5,
            fullName: "David Henry",
            designation: "DotNet Developer",
            gender: "male",
            teamName: "TeamB",
         },
         {
            id: 6,
            fullName: "Sarah Blake",
            designation: "SQL Server DBA",
            gender: "female",
            teamName: "TeamB",
         },
         {
            id: 7,
            fullName: "James Bennet",
            designation: "Angular Developer",
            gender: "male",
            teamName: "TeamC",
         },
         {
            id: 8,
            fullName: "Jessica Faye",
            designation: "API Developer",
            gender: "female",
            teamName: "TeamC",
         },
         {
            id: 9,
            fullName: "Lita Stone",
            designation: "C++ Developer",
            gender: "female",
            teamName: "TeamC",
         },
         {
            id: 10,
            fullName: "Daniel Young",
            designation: "Python Developer",
            gender: "male",
            teamName: "TeamD",
         },
         {
            id: 11,
            fullName: "Adrian Jacobs",
            designation: "Vue Developer",
            gender: "male",
            teamName: "TeamD",
         },
         {
            id: 12,
            fullName: "Devin Monroe",
            designation: "Graphic Designer",
            gender: "male",
            teamName: "TeamD",
         },
      ]
   );

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
