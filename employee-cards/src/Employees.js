import DropDown from "./DropDown";
import RenderCards from "./RenderCards";

const Employees = ({ employees, handleEmployeeCardClick, handleTeamSelectionChange, selectedTeam }) => {
   return (
      <main className="container">
         <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
               <DropDown
                  handleTeamSelectionChange={handleTeamSelectionChange}
                  selectedTeam={selectedTeam}
               />
            </div>
         </div>

         <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
               <div className="card-collection">
                <RenderCards employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam={selectedTeam}/>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Employees;
