/* ── Site Constants ─────────────────────────────────────── */

export const SITE_NAME = "Panchsheel Geo Infra Solution";
export const SITE_TAGLINE =
  "Professional Geospatial & Infrastructure Surveying";
export const SITE_DESCRIPTION =
  "Geospatial and infrastructure surveying company delivering precise survey data for highways, railways, mining, solar energy, and government infrastructure projects across India.";

export const CONTACT = {
  phone: ["+91 6261876968", "+91 8962133863"],
  email: "panchasheel.gis@gmail.com",
  address: {
    line1: "H.No. 80, Shop No. 02",
    line2: "Near Durgadham Mandir, Ashoka Garden",
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India",
    pin: "462023",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    title: "DGPS Survey",
    description:
      "High-accuracy differential GPS surveys for control point establishment, boundary demarcation, and geospatial referencing across large project areas.",
  },
  {
    title: "Thermal Survey",
    description:
      "Drone-based thermal imaging surveys for infrastructure inspection, solar power plants, electrical utilities, industrial facilities, building diagnostics, and asset condition assessment. High-resolution thermal cameras identify heat loss, electrical faults, equipment anomalies, and maintenance issues before they become critical.",
  },
  {
    title: "LiDAR Survey",
    description:
      "3D point cloud data capture for terrain modelling, corridor mapping, vegetation analysis, and detailed surface characterisation.",
  },
  {
    title: "Topographical Survey",
    description:
      "Detailed ground-level surveys recording natural and man-made features, elevation data, and land contours for engineering design.",
  },
  {
    title: "Engineering Survey",
    description:
      "Precision surveys supporting structural design, alignment verification, earthwork calculation, and construction layout.",
  },
  {
    title: "Mining Survey",
    description:
      "Pit surveying, volumetric estimation, lease boundary mapping, and regulatory compliance surveys for active mining operations.",
  },
  {
    title: "Road & Railway Survey",
    description:
      "Corridor surveys for highway and railway projects including alignment planning, cross-section generation, and right-of-way mapping.",
  },
  {
    title: "GIS Mapping",
    description:
      "Spatial data processing, thematic mapping, and geographic information system outputs for planning, analysis, and decision support.",
  },
] as const;

export const INDUSTRIES = [
  { name: "Highways", icon: "road" },
  { name: "Railways", icon: "rail" },
  { name: "Mining", icon: "mining" },
  { name: "Solar Power", icon: "solar" },
  { name: "Smart Cities", icon: "city" },
  { name: "Transmission Lines", icon: "transmission" },
  { name: "Water Resources", icon: "water" },
  { name: "Construction", icon: "construction" },
] as const;

export const TECHNOLOGIES = [
  {
    name: "DGPS",
    fullName: "Differential Global Positioning System",
    description:
      "Sub-centimetre positioning accuracy for control surveys, boundary surveys, and large-area geospatial referencing.",
  },
  {
    name: "UAV / Drone Systems",
    fullName: "Unmanned Aerial Vehicle Survey Platforms",
    description:
      "Professional drone platforms for aerial photogrammetry, orthomosaic generation, volumetric analysis, and site monitoring.",
  },
  {
    name: "Total Station",
    fullName: "Electronic Total Station",
    description:
      "Precision angle and distance measurement for engineering surveys, construction layout, and detailed topographic mapping.",
  },
  {
    name: "LiDAR",
    fullName: "Light Detection and Ranging",
    description:
      "High-density 3D point cloud capture for terrain modelling, corridor surveys, and vegetation canopy analysis.",
  },
  {
    name: "GIS Software",
    fullName: "Geographic Information Systems",
    description:
      "Spatial data processing, thematic mapping, and geospatial analysis using industry-standard GIS platforms.",
  },
  {
    name: "Thermal Survey",
    fullName: "Advanced Thermal Imaging",
    description:
      "Advanced thermal imaging surveys for infrastructure inspection, solar plants, utilities, industrial facilities, and condition assessment using high-resolution thermal cameras mounted on drones.",
  },
] as const;
