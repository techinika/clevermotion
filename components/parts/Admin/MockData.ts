"use client";

export const genCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return "CM" + Array.from({length:4}, () => chars[Math.floor(Math.random()*chars.length)]).join("");
};

export const INITIAL_CUSTOMERS = [
  { id:"c1", name:"TUBURA Rwanda", contact:"Sarah Mukamana", email:"client@tubura.org", phone:"+250 788 100 200", org:"NGO / Agriculture", status:"active", joined:"Jan 12, 2024", projects:["p1"] },
  { id:"c2", name:"REMA Rwanda",   contact:"Jean-Paul Habimana", email:"media@rema.gov.rw", phone:"+250 788 200 300", org:"Government / Environment", status:"active", joined:"Oct 5, 2023", projects:["p2"] },
  { id:"c3", name:"TangNest Real Estate", contact:"Diane Uwase", email:"brand@tangnest.rw", phone:"+250 788 300 400", org:"Corporate / Real Estate", status:"active", joined:"Feb 28, 2024", projects:["p3"] },
  { id:"c4", name:"PSF Rwanda",    contact:"Eric Nshimiyimana", email:"comms@psf.rw", phone:"+250 788 400 500", org:"Private Sector / Advocacy", status:"active", joined:"Aug 15, 2023", projects:["p4"] },
  { id:"c5", name:"Rising Academies", contact:"Amir Keita", email:"amir@risingacademies.com", phone:"+232 76 123 456", org:"NGO / Education", status:"pending", joined:"Apr 3, 2024", projects:["p5"] },
];

export const INITIAL_PROJECTS = [
  {
    id:"p1", customerId:"c1", title:"Seeds of Change", subtitle:"Agricultural Impact Documentary",
    category:"Documentary", status:"delivered", code: genCode(),
    created:"Jan 15, 2024", delivered:"May 14, 2024", expires:"Jun 14, 2024",
    gradient:"linear-gradient(135deg,#0d2a1a,#193d10)",
    note:"Thank you for trusting us with your story. This package contains all deliverables as agreed in your production brief.",
    accessLog:[
      { event:"Delivered", at:"May 14, 2024 · 09:12", by:"Admin", icon:"delivered" },
      { event:"Accessed by client@tubura.org", at:"May 14, 2024 · 11:45", by:"Client", icon:"login" },
      { event:"File downloaded: Hero Film", at:"May 14, 2024 · 11:47", by:"Client", icon:"download" },
      { event:"File downloaded: Photo Essay", at:"May 15, 2024 · 08:22", by:"Client", icon:"download" },
    ],
    files:[
      { id:"f1", name:"Seeds_of_Change_Hero_Film.mp4",       type:"video",    size:"2.4 GB", duration:"22:14", uploaded:"May 13, 2024" },
      { id:"f2", name:"Seeds_of_Change_Cutdown_90s.mp4",     type:"video",    size:"380 MB", duration:"1:30",  uploaded:"May 13, 2024" },
      { id:"f3", name:"Seeds_of_Change_Photo_Essay.zip",     type:"archive",  size:"1.1 GB", duration:null,    uploaded:"May 13, 2024" },
      { id:"f4", name:"Seeds_of_Change_Campaign_Stills.zip", type:"archive",  size:"340 MB", duration:null,    uploaded:"May 14, 2024" },
      { id:"f5", name:"Seeds_of_Change_Captions.pdf",        type:"doc",      size:"1.2 MB", duration:null,    uploaded:"May 14, 2024" },
    ],
  },
  {
    id:"p2", customerId:"c2", title:"Climate Action Kigali", subtitle:"Conference Campaign Package",
    category:"Campaign", status:"delivered", code: genCode(),
    created:"Nov 10, 2023", delivered:"Dec 10, 2023", expires:"Jan 10, 2024",
    gradient:"linear-gradient(135deg,#0d1a2a,#103040)",
    note:"Your campaign package is ready. All 12 assets are formatted for the platforms specified in your brief.",
    accessLog:[
      { event:"Delivered", at:"Dec 10, 2023 · 10:00", by:"Admin", icon:"delivered" },
      { event:"Accessed by media@rema.gov.rw", at:"Dec 10, 2023 · 14:30", by:"Client", icon:"login" },
      { event:"All files downloaded", at:"Dec 11, 2023 · 09:00", by:"Client", icon:"download" },
    ],
    files:[
      { id:"f1", name:"CAK_Opening_Ceremony_Film.mp4", type:"video",   size:"890 MB", duration:"8:44", uploaded:"Dec 9, 2023" },
      { id:"f2", name:"CAK_Social_Reels_Pack.zip",     type:"archive", size:"1.6 GB", duration:null,   uploaded:"Dec 9, 2023" },
      { id:"f3", name:"CAK_Speaker_Portraits.zip",     type:"archive", size:"560 MB", duration:null,   uploaded:"Dec 9, 2023" },
      { id:"f4", name:"CAK_Usage_Rights.pdf",          type:"doc",     size:"820 KB", duration:null,   uploaded:"Dec 10, 2023" },
    ],
  },
  {
    id:"p3", customerId:"c3", title:"TangNest Brand Launch", subtitle:"Corporate Identity Film",
    category:"Brand Film", status:"ready", code: genCode(),
    created:"Mar 10, 2024", delivered:null, expires:null,
    gradient:"linear-gradient(135deg,#1a1a2a,#252535)",
    note:"Your brand film package is ready for launch. The hero film is colour-graded and fully mastered.",
    accessLog:[
      { event:"Project created", at:"Mar 10, 2024 · 09:00", by:"Admin", icon:"delivered" },
      { event:"Files uploaded (5 files)", at:"Mar 20, 2024 · 15:44", by:"Admin", icon:"upload" },
      { event:"Marked as ready for delivery", at:"Mar 22, 2024 · 10:00", by:"Admin", icon:"delivered" },
    ],
    files:[
      { id:"f1", name:"TangNest_Hero_Film_90s.mp4",        type:"video",   size:"640 MB", duration:"1:30", uploaded:"Mar 20, 2024" },
      { id:"f2", name:"TangNest_Social_Cut_15s.mp4",       type:"video",   size:"85 MB",  duration:"0:15", uploaded:"Mar 20, 2024" },
      { id:"f3", name:"TangNest_Property_Photography.zip", type:"archive", size:"1.9 GB", duration:null,   uploaded:"Mar 20, 2024" },
    ],
  },
  {
    id:"p4", customerId:"c4", title:"Youth Entrepreneurship Forum", subtitle:"Multi-format Event Production",
    category:"Event", status:"in_progress", code: genCode(),
    created:"Jul 5, 2023", delivered:null, expires:null,
    gradient:"linear-gradient(135deg,#2a1a0d,#3d280a)",
    note:"",
    accessLog:[
      { event:"Project created", at:"Jul 5, 2023 · 11:00", by:"Admin", icon:"delivered" },
    ],
    files:[],
  },
  {
    id:"p5", customerId:"c5", title:"Rising Academies Brand Doc", subtitle:"Education Brand Documentary",
    category:"Documentary", status:"in_progress", code: genCode(),
    created:"Apr 3, 2024", delivered:null, expires:null,
    gradient:"linear-gradient(135deg,#1a0d2a,#281040)",
    note:"",
    accessLog:[
      { event:"Project created", at:"Apr 3, 2024 · 08:30", by:"Admin", icon:"delivered" },
    ],
    files:[],
  },
];

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
export const copyText = (t: string) => { navigator.clipboard?.writeText(t).catch(()=>{}); };