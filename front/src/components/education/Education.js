
import React, { useState} from "react";
import EducationCard from "./EducationCard";
import EduEditForm from "./EducationEditForm";

function Education({ edu, isEditable,setEdu }) {
 
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