const mongoose = require('mongoose');

const TabSchema = mongoose.Schema({
  name: { type: String, required: true, index: true },
  description: String,
  dataPoints: [
    {
      dataType: {
        type: String,
        enum: ["selection", "text", "number", "date"],
        default: "user",
      },
      label: String,
      description: String,
      options: Array,
      placeholder: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

TabSchema.methods.toJSON = function () {
  var tab = this.toObject();
  delete tab.__v;
  return tab;
};

const Tab = mongoose.model("Tab", TabSchema);

export default  Tab;
