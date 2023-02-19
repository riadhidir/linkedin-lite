import mongoose from "mongoose";
const { Schema, model } = mongoose;

const candidatureSchema = new Schema(
  {
    candidat: { type: SchemaTypes.ObjectId, ref: "Candidat", required: true },
    cv: { type: binData, required: true },
    offre: { type: SchemaTypes.ObjectId, ref: "Job", required: true },
    sexe: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Candidature = model("Candidature", candidatureSchema);
export default Candidature;
