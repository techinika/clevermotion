type Asset = {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  year: string;
  message: string;
  gradient: string;
  delivered: string;
  expires: string;
  files: { id: string; name: string; type: string; size: string; duration: string | null; desc: string }[];
};

export const MOCK_ASSETS: Record<string, Asset> = {
  "proj-001": {
    id: "proj-001",
    title: "Seeds of Change",
    subtitle: "Agricultural Impact Documentary",
    client: "McKinsey & TUBURA Rwanda",
    category: "Documentary",
    year: "2024",
    message: "Thank you for trusting us with your story. This package contains all deliverables as agreed in your production brief. Please review each file and reach out with any feedback within 14 days of delivery.",
    gradient: "linear-gradient(160deg,#0d2a1a 0%,#193d10 60%,#0a1a08 100%)",
    delivered: "May 14, 2026",
    expires: "Jun 14, 2026",
    files: [
      { id: "f1", name: "Seeds_of_Change_Hero_Film.mp4",       type: "video",    size: "2.4 GB", duration: "22:14", desc: "Full-length hero documentary" },
      { id: "f2", name: "Seeds_of_Change_Cutdown_90s.mp4",     type: "video",    size: "380 MB", duration: "1:30",  desc: "Social / donor 90-second cut" },
      { id: "f3", name: "Seeds_of_Change_Cutdown_30s.mp4",     type: "video",    size: "120 MB", duration: "0:30",  desc: "30-second social reel" },
      { id: "f4", name: "Seeds_of_Change_Photo_Essay.zip",     type: "archive",  size: "1.1 GB", duration: null,    desc: "60 high-res editorial photos" },
      { id: "f5", name: "Seeds_of_Change_Campaign_Stills.zip", type: "archive",  size: "340 MB", duration: null,    desc: "12 hero campaign stills, print-ready" },
      { id: "f6", name: "Seeds_of_Change_Captions.pdf",        type: "document", size: "1.2 MB", duration: null,    desc: "Full caption list & usage rights" },
    ],
  },
  "proj-002": {
    id: "proj-002",
    title: "Climate Action Kigali",
    subtitle: "Conference Campaign Package",
    client: "REMA Rwanda",
    category: "Campaign",
    year: "2023",
    message: "Your campaign package is ready. All 12 assets are formatted for the platforms specified in your brief. Usage rights are detailed in the included PDF.",
    gradient: "linear-gradient(160deg,#0d1a2a 0%,#103040 60%,#08151a 100%)",
    delivered: "Dec 10, 2023",
    expires: "Jan 10, 2024",
    files: [
      { id: "f1", name: "CAK_Opening_Ceremony_Film.mp4",  type: "video",    size: "890 MB", duration: "8:44",  desc: "Opening ceremony hero film" },
      { id: "f2", name: "CAK_Social_Reels_Pack.zip",      type: "archive",  size: "1.6 GB", duration: null,    desc: "12 social reels, all formats" },
      { id: "f3", name: "CAK_Speaker_Portraits.zip",      type: "archive",  size: "560 MB", duration: null,    desc: "Hi-res speaker portrait set" },
      { id: "f4", name: "CAK_Event_Photography.zip",      type: "archive",  size: "2.1 GB", duration: null,    desc: "Full 4-day event photo set" },
      { id: "f5", name: "CAK_Usage_Rights.pdf",           type: "document", size: "820 KB", duration: null,    desc: "Usage rights & licensing guide" },
    ],
  },
  "proj-003": {
    id: "proj-003",
    title: "TangNest Brand Launch",
    subtitle: "Corporate Identity Film",
    client: "TangNest Real Estate",
    category: "Brand Film",
    year: "2024",
    message: "Your brand film package is ready for launch. The hero film is colour-graded and fully mastered. Social cuts are optimised for each platform format.",
    gradient: "linear-gradient(160deg,#1a1a2a 0%,#252535 60%,#0d0d1a 100%)",
    delivered: "Mar 22, 2024",
    expires: "Apr 22, 2024",
    files: [
      { id: "f1", name: "TangNest_Hero_Film_90s.mp4",         type: "video",    size: "640 MB", duration: "1:30",  desc: "Master brand film" },
      { id: "f2", name: "TangNest_Social_Cut_15s_IG.mp4",     type: "video",    size: "85 MB",  duration: "0:15",  desc: "Instagram 15s cut" },
      { id: "f3", name: "TangNest_Social_Cut_15s_TikTok.mp4", type: "video",    size: "78 MB",  duration: "0:15",  desc: "TikTok 15s cut (9:16)" },
      { id: "f4", name: "TangNest_Property_Photography.zip",  type: "archive",  size: "1.9 GB", duration: null,    desc: "Full property photography set" },
      { id: "f5", name: "TangNest_Executive_Portraits.zip",   type: "archive",  size: "480 MB", duration: null,    desc: "Executive portrait set" },
      { id: "f6", name: "TangNest_Delivery_Notes.pdf",        type: "document", size: "1.4 MB", duration: null,    desc: "Delivery notes & revision policy" },
    ],
  },
};

export const MOCK_CODES: Record<string, Record<string, string>> = {
  "client@tubura.org":       { "proj-001": "CM2401" },
  "media@rema.gov.rw":       { "proj-002": "CM2302" },
  "brand@tangnest.rw":       { "proj-003": "CM2403" },
  "*": { "*": "DEMO01" },
};

export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function lookupAsset(assetId: string) {
  await sleep(600);
  return MOCK_ASSETS[assetId] ?? null;
}

export async function verifyCode(email: string, assetId: string, code: string) {
  await sleep(900);
  const upper = code.toUpperCase();
  const byEmail = MOCK_CODES[email.toLowerCase()];
  if (byEmail && (byEmail[assetId] === upper || byEmail["*"] === upper)) return true;
  if (MOCK_CODES["*"]["*"] === upper) return true;
  return false;
}