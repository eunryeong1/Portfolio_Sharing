
import React, { useState} from "react";
import EducationCard from "./EducationCard";
import EduEditForm from "./EducationEditForm";

function Education({ edu, isEditable,setEdu }) {
<<<<<<< HEAD
  // // useState 훅을 통해 isEditing 상태를 생성함.
=======
 
>>>>>>> 03ad744f4c5c72f20a0bf234c173a5cf08dd476f
  const [isEditing, setIsEditing] = useState(false)
  return (
    <>
    {!isEditing ? (
      <EducationCard
        edu={edu}
        setIsEditing={setIsEditing}
        isEditable={isEditable}
      />
    ) : (
      <EduEditForm
        edu={edu}
        setIsEditing={setIsEditing}
        setEdu={setEdu}
      />
    )}
    </>
  );
}

export default Education;
