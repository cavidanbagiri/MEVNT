import mongoose from "mongoose";

const phonesSchema = new mongoose.Schema({
  Model: { type: String, required: true },
  Brand: { type: String, required: true },
  Thumbnail: { type: String, default: "" },
  Price: { type: Number, required: true },
  Discount: { type: Number },
  Point: { type: Number },
  Colors: { type: [String], default: [] },
  Network: { type: String, default: "" },
  TwoG: { type: String, default: "" },
  GPRS: { type: String, default: "" },
  EDGE: { type: String, default: "" },
  Announced: { type: String, default: "" },
  Status: { type: String, default: "" },
  Dimensions: { type: String, default: "" },
  field13: { type: String, default: "" },
  SIM: { type: String, default: "" },
  Display_type: { type: String, default: "" },
  Display_resolution: { type: String, default: "" },
  Display_size: { type: String, default: "" },
  Memory_card: { type: String, default: "" },
  Internal_memory: { type: String, default: "" },
  Primary_camera: { type: String, default: "" },
  Secondary_camera: { type: String, default: "" },
  Loud_speaker: { type: String, default: "" },
  Audio_jack: { type: String, default: "" },
  WLAN: { type: String, default: "" },
  Bluetooth: { type: String, default: "" },
  GPS: { type: String, default: "" },
  Radio: { type: String, default: "" },
  USB: { type: String, default: "" },
  Battery: { type: String, default: "" },
  Filters: {
    type: [],
    default: ["Brand", "Colors", "SIM", "Display_type", "Display_size", "Display_resolution"]
  }
});

// eslint-disable-next-line new-cap
const PhoneSchema = new mongoose.model("phones", phonesSchema);

export default PhoneSchema;
