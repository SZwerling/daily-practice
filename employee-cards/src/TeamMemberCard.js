import femaleProfile from "./img/femaleProfile.jpg";
import maleProfile from "./img/maleProfile.jpg";

const TeamMemberCard = ({handleEmployeeCardClick, selectedTeam, employee}) => {
    return(
        <div
        key={employee.id}
        id={employee.id}
        className={
           employee.teamName === selectedTeam
              ? "standout card m-2"
              : "card m-2"
        }
        onClick={handleEmployeeCardClick}
     >
        {employee.gender === "male" ? (
           <img src={maleProfile} alt="profile" className="card-img-top" />
        ) : (
           <img src={femaleProfile} alt="profile" className="card-img-top" />
        )}
        <div className="card-body">
           <h5 className="card-title">
              Full name: {employee.fullName}
           </h5>
           <p className="card-text">
              <b>Designation: </b>
              {employee.designation}
           </p>
        </div>
     </div>
    )
}

export default TeamMemberCard;