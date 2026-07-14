// Danh mục thương hiệu và nhãn trạng thái
const BRANDS = [
  { id: "all",          label: "Tất cả" },
  { id: "KORAH",        label: "KORAH" },
  { id: "ROY",          label: "ROY" },
  { id: "USAMMY",       label: "USAMMY" },
  { id: "discontinued", label: "Ngưng sản xuất" }
];

const STATUS_LABELS = {
  "active":       { text: "Đang phân phối",   cls: "badge--active" },
  "coming-soon":  { text: "Sắp ra mắt",        cls: "badge--coming" },
  "discontinued": { text: "Ngưng sản xuất",    cls: "badge--disc" }
};

const TECH_TAGS = {
  sic:     "Silicon Carbide SiC",
  pfc:     "PFC Power Supply",
  classD:  "Class D High Efficiency",
  classTD: "Class TD",
  dsp:     "DSP Processing"
};
