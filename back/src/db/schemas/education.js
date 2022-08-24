import { Schema, model } from "mongoose";

const EducationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    univ: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EducationModel = model("Education", EducationSchema);

export { EducationModel };
