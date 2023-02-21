import mongoose from "mongoose";
const { Schema,SchemaTypes, model } = mongoose;

const candidatureSchema = new Schema(
  {
    candidat: { type: SchemaTypes.ObjectId, ref: "Candidat", required: true },
    cv: { type: String, required: true },
    job: { type: SchemaTypes.ObjectId, ref: "Job", required: true },
    etat: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Candidature = model("Candidature", candidatureSchema);
export default Candidature;
