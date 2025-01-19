import mongoose from 'mongoose';

const ipoSchema = new mongoose.Schema({
  companyLogoURL: {
    type: String,
    required: true, 
  },
  companyName: {
    type: String,
    required: true, 
  },
  priceBand: {
    type: String,
    required: true, 
  },
  open: {
    type: Date,
    required: true, 
  },
  close: {
    type: Date,
    required: true, 
  },
  issueSize: {
    type: String,
    required: true, 
  },
  issueType: {
    type: String,
    required: true, 
  },
  listingDate: {
    type: Date,
    required: true, 
  },
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing', 'Closed', 'Listed'], 
    required: true,
  },
  ipoPrice: {
    type: Number,
    required: true, 
  },
  listingPrice: {
    type: Number,
    required: true, 
  },
  listingGain: {
    type: Number, 
    required: true,
  },
  cmp: {
    type: Number, 
    required: true,
  },
  currentReturn: {
    type: Number, 
    required: true,
  },
  rhpPdfLink: {
    type: String, 
    required: true,
  },
  drhpPdfLink: {
    type: String, 
    required: true,
  },
});

const ipoModel = mongoose.model('IPO', ipoSchema);

export default ipoModel;
