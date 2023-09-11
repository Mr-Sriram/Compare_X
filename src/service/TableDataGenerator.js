import compareData from "../assets/compareX.json";

function TableDataGenerator(PA, PB, month) {
  switch (true) {
    case (PA === "Product A" && PB === "Product B") ||
      (PB === "Product A" && PA === "Product B"):
      return compareData["monthly_comparison"][0][month]["CompareAB"];
    case (PA === "Product A" && PB === "Product C") ||
      (PB === "Product A" && PA === "Product C"):
      return compareData["monthly_comparison"][0][month]["CompareAC"];
    case (PA === "Product A" && PB === "Product D") ||
      (PB === "Product A" && PA === "Product D"):
      return compareData["monthly_comparison"][0][month]["CompareAD"];
    case (PA === "Product B" && PB === "Product C") ||
      (PB === "Product B" && PA === "Product C"):
      return compareData["monthly_comparison"][0][month]["CompareBC"];
    case (PA === "Product B" && PB === "Product D") ||
      (PB === "Product B" && PA === "Product D"):
      return compareData["monthly_comparison"][0][month]["CompareBD"];
    case (PA === "Product C" && PB === "Product D") ||
      (PB === "Product C" && PA === "Product D"):
      return compareData["monthly_comparison"][0][month]["CompareCD"];
    default:
      return null;
  }
}

export default TableDataGenerator;
