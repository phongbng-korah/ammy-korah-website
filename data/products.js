// ============================================================
// AMMY / KORAH — Dữ liệu sản phẩm
// ============================================================
// Hướng dẫn quản lý:
//   visible: false  → ẩn sản phẩm khỏi website (không xóa data)
//   visible: true   → hiện sản phẩm
//   status: "active"       → Đang phân phối
//   status: "coming-soon"  → Sắp ra mắt
//   status: "discontinued" → Ngưng sản xuất
// Sau khi chỉnh file này, upload lên hosting là xong.
// ============================================================

const PRODUCTS = [

  // ─── KORAH ──────────────────────────────────────────────
  {
    id: "korah-k19-pro",
    brand: "KORAH",
    name: "KORAH K19 PRO",
    tagline: "Power Amplifier chuyên nghiệp — thông số kỹ thuật đang cập nhật",
    status: "active",
    visible: true,
    image: "",
    tech: ["sic", "pfc", "classD"],
    specs: {
      "Công suất": "Đang cập nhật",
      "Số kênh": "Đang cập nhật",
      "Dải tần số": "Đang cập nhật",
      "THD+N": "Đang cập nhật",
      "Điện áp vào": "Đang cập nhật",
      "Kích thước": "Đang cập nhật",
      "Trọng lượng": "Đang cập nhật"
    },
    description: "Thông tin chi tiết sẽ được cập nhật sau. Vui lòng liên hệ AMMY để biết thêm thông tin.",
    features: [],
    manuals: [],
    applications: []
  },

  {
    id: "korah-k29-pro",
    brand: "KORAH",
    name: "KORAH K29 PRO",
    tagline: "Power Amplifier chuyên nghiệp — thông số kỹ thuật đang cập nhật",
    status: "active",
    visible: true,
    image: "",
    tech: ["sic", "pfc", "classD"],
    specs: {
      "Công suất": "Đang cập nhật",
      "Số kênh": "Đang cập nhật",
      "Dải tần số": "Đang cập nhật",
      "THD+N": "Đang cập nhật",
      "Điện áp vào": "Đang cập nhật",
      "Kích thước": "Đang cập nhật",
      "Trọng lượng": "Đang cập nhật"
    },
    description: "Thông tin chi tiết sẽ được cập nhật sau. Vui lòng liên hệ AMMY để biết thêm thông tin.",
    features: [],
    manuals: [],
    applications: []
  },

  // ─── ROY ────────────────────────────────────────────────
  {
    id: "roy-placeholder-01",
    brand: "ROY",
    name: "ROY — Model đang cập nhật",
    tagline: "Dòng sản phẩm ROY — thông tin sẽ được cập nhật sau",
    status: "active",
    visible: true,
    image: "",
    tech: [],
    specs: {
      "Thông số kỹ thuật": "Đang cập nhật"
    },
    description: "Thông tin sản phẩm ROY sẽ được cập nhật sau. Vui lòng liên hệ AMMY để biết thêm thông tin.",
    features: [],
    manuals: [],
    applications: []
  },

  // ─── USAMMY ─────────────────────────────────────────────
  {
    id: "usammy-placeholder-01",
    brand: "USAMMY",
    name: "USAMMY — Model đang cập nhật",
    tagline: "Dòng sản phẩm USAMMY — thông tin sẽ được cập nhật sau",
    status: "active",
    visible: true,
    image: "",
    tech: [],
    specs: {
      "Thông số kỹ thuật": "Đang cập nhật"
    },
    description: "Thông tin sản phẩm USAMMY sẽ được cập nhật sau. Vui lòng liên hệ AMMY để biết thêm thông tin.",
    features: [],
    manuals: [],
    applications: []
  },

  // ─── Ngưng sản xuất ─────────────────────────────────────
  {
    id: "discontinued-sample-01",
    brand: "KORAH",
    name: "Model đã ngưng sản xuất — mẫu",
    tagline: "Sản phẩm này đã ngưng sản xuất. Tài liệu kỹ thuật vẫn được lưu trữ để hỗ trợ.",
    status: "discontinued",
    visible: false,
    image: "",
    tech: [],
    specs: {
      "Thông số kỹ thuật": "Tài liệu kỹ thuật sẽ được cập nhật sau"
    },
    description: "Sản phẩm đã ngưng sản xuất. Tài liệu hướng dẫn vận hành vẫn còn hiệu lực cho các đơn vị đang sử dụng.",
    features: [],
    manuals: [],
    applications: []
  }

];
