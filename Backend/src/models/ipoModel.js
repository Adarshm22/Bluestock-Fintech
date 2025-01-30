import mongoose from 'mongoose';

const IpoSchema = new mongoose.Schema({
  companyLogoURL: {
    type: String,
    required: true, 
  },

  companyName: {
    type: String,
    trim:true,
    lowercase:true,
    required: true
  },

  priceBand: {
    type: Number,
    required: true, 
  },

  open: {
    type: String,
    default: "Not Issued",
    
  },

  close: {
    type: String,
    default: "Not Issued",
  },

  issueSize: {
    type: String,
    required: true, 
  },

  issueType: {
    type: String,
    enum:{
      values:["Fixed Price", "Book Building"],
      message:`{VALUE} is not Valid`
    },
    required: true, 
  },

  listingDate: {
    type: String,
    required: true, 
  },

  status: {
    type: String,
    enum:{
      values:["Upcoming", "Ongoing", "Closed", "Listed"],
      message:`{VALUE} is not a valid status.Accepted values are: Upcoming, Ongoing, Closed, Listed.`
    }, 
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

  rhpPdfUrl: {
    type: String, 
    required: true,
  },

  drhpPdfUrl: {
    type: String, 
    required: true,
  }

},{timestamps:true});

export const IPO = mongoose.model('IPO', IpoSchema);


