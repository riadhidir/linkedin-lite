import mongoose, { SchemaType, SchemaTypes } from "mongoose";
const { Schema, model } = mongoose;

const condidatureSchema = new Schema(
  {
    condida: { type: SchemaTypes.ObjectId, ref: "Condidat", required: true },
    cv: { type: binData, required: true },
    offre: { type: SchemaTypes.ObjectId, ref: "Offer", required: true },
    sexe: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Condidature = model("Condidature", condidatureSchema);
export default Condidature;
