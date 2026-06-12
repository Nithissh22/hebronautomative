export interface SpecItem {
  icon: string;
  label: string;
  value: string;
}

export interface EquipmentItem {
  name: string;
  qty: string;
}

export interface CapabilityData {
  id: string;
  number: string;
  title: string;
  powerStatement: string;
  videoSrc: string;
  certBadge?: string;
  specs: SpecItem[];
  equipmentList: EquipmentItem[];
  processFlow: string[];
  trustPoints: string[];
  ctaText: string;
  drawerKey: string;
}

export const capabilitiesList: CapabilityData[] = [
  {
    id: "die-casting",
    number: "01",
    title: "DIE CASTING",
    powerStatement: "Cold chamber HPDC with zero-defect delivery to Tier-1 OEMs",
    videoSrc: "/die-casting.mp4",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-settings-2", label: "Process", value: "Cold Chamber HPDC" },
      { icon: "ti-weight", label: "Tonnage", value: "120T / 180T / 250T" },
      { icon: "ti-building-factory", label: "Machines", value: "7 PDC Machines" },
      { icon: "ti-atom", label: "Alloys", value: "ADC12, A380, LM6" }
    ],
    equipmentList: [
      { name: "120T Machine", qty: "×5" },
      { name: "180T Machine", qty: "×1" },
      { name: "250T Machine", qty: "×1" }
    ],
    processFlow: ["Melt", "Inject", "Cool", "Trim", "Inspect"],
    trustPoints: [
      "High volume repeatability",
      "Tight dimensional tolerances",
      "Lower per-unit cost at scale"
    ],
    ctaText: "Request Die Casting Quote →",
    drawerKey: "die-casting"
  },
  {
    id: "cnc-machining",
    number: "02",
    title: "CNC MACHINING",
    powerStatement: "5-axis precision machining for complex automotive geometries",
    videoSrc: "/machining.mp4",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-cpu", label: "Type", value: "5-Axis CNC" },
      { icon: "ti-building-factory", label: "Machines", value: "5 VMC Machines" },
      { icon: "ti-ruler", label: "Tolerance", value: "±0.01mm" },
      { icon: "ti-atom", label: "Material", value: "Aluminium Alloys" }
    ],
    equipmentList: [
      { name: "VMC Machine", qty: "×5" },
      { name: "Tool Room Setup", qty: "×1" }
    ],
    processFlow: ["Raw Stock", "Setup", "Machine", "Deburr", "CMM"],
    trustPoints: [
      "Mirror-finish surface quality",
      "Sub-micron repeatability",
      "Fully automated tool change"
    ],
    ctaText: "Request Machining Quote →",
    drawerKey: "machining"
  },
  {
    id: "powder-coating",
    number: "03",
    title: "POWDER COATING",
    powerStatement: "Semi-automatic coating line for corrosion-resistant OEM finishes",
    videoSrc: "/inspection.mp4",
    specs: [
      { icon: "ti-settings", label: "Type", value: "Semi-Automatic" },
      { icon: "ti-palette", label: "Finish", value: "RAL Custom Colors" },
      { icon: "ti-layers", label: "Thickness", value: "60–80 microns" },
      { icon: "ti-chart-bar", label: "Capacity", value: "High Volume" }
    ],
    equipmentList: [
      { name: "Spray Booth", qty: "×2" },
      { name: "Curing Oven", qty: "×1" },
      { name: "Pre-treatment Tank", qty: "×3" }
    ],
    processFlow: ["Pre-treat", "Dry", "Coat", "Cure", "QC"],
    trustPoints: [
      "Salt spray tested",
      "OEM color matching",
      "Zero adhesion failures"
    ],
    ctaText: "Request Coating Quote →",
    drawerKey: "powder-coating"
  },
  {
    id: "sub-assembly",
    number: "04",
    title: "SUB-ASSEMBLY",
    powerStatement: "Bush pressing, insert fitting and torque-verified assembly lines",
    videoSrc: "/assembly.mp4",
    specs: [
      { icon: "ti-tool", label: "Type", value: "Bush & Insert Assembly" },
      { icon: "ti-settings-2", label: "Method", value: "Torque Verified" },
      { icon: "ti-scan", label: "Traceability", value: "Part-level" },
      { icon: "ti-package", label: "Output", value: "Ready-to-fit" }
    ],
    equipmentList: [
      { name: "Press Machine", qty: "×3" },
      { name: "Torque Station", qty: "×2" },
      { name: "Inspection Bench", qty: "×2" }
    ],
    processFlow: ["Receive", "Press", "Torque", "Check", "Pack"],
    trustPoints: [
      "100% torque verification",
      "Part-level traceability",
      "Delivery-ready assembly"
    ],
    ctaText: "Request Assembly Quote →",
    drawerKey: "assembly"
  },
  {
    id: "quality-systems",
    number: "05",
    title: "QUALITY & INSPECTION",
    powerStatement: "Standard room with full metrology suite — zero escapes policy",
    videoSrc: "/inspection.mp4",
    certBadge: "IATF 16949:2016 Certified",
    specs: [
      { icon: "ti-microscope", label: "Equipment", value: "UTM, Spectro, VMM, 2D" },
      { icon: "ti-certificate", label: "Standard", value: "IATF 16949:2016" },
      { icon: "ti-clipboard-check", label: "Method", value: "PPAP Level 3" },
      { icon: "ti-chart-line", label: "Reporting", value: "8D / SPC" }
    ],
    equipmentList: [
      { name: "UTM", qty: "×1" },
      { name: "Spectrometer", qty: "×1" },
      { name: "VMM", qty: "×1" },
      { name: "2D Projector", qty: "×1" }
    ],
    processFlow: ["Receive", "Measure", "Report", "Release", "Archive"],
    trustPoints: [
      "100% dimensional reporting",
      "First-article inspection",
      "Customer PPAP ready"
    ],
    ctaText: "Request Quality Audit →",
    drawerKey: "quality"
  }
];
