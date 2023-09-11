import compareData from "../assets/compareX.json";

function OverallComparison(PA, PB) {
  const data = compareData;
  let od = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];

  switch (true) {
    case (PA === "Product A" && PB === "Product B") ||
      (PB === "Product A" && PA === "Product B"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareAB"];
        od.push(monthdata);
      });
      return od;
    case (PA === "Product A" && PB === "Product C") ||
      (PB === "Product A" && PA === "Product C"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareAC"];
        od.push(monthdata);
      });
      return od;
    case (PA === "Product A" && PB === "Product D") ||
      (PB === "Product A" && PA === "Product D"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareAD"];
        od.push(monthdata);
      });
      return od;
    case (PA === "Product B" && PB === "Product C") ||
      (PB === "Product B" && PA === "Product C"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareBC"];
        od.push(monthdata);
      });
      return od;
    case (PA === "Product B" && PB === "Product D") ||
      (PB === "Product B" && PA === "Product D"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareBD"];
        od.push(monthdata);
      });
      return od;
    case (PA === "Product C" && PB === "Product D") ||
      (PB === "Product C" && PA === "Product D"):
      months.forEach((mon) => {
        const monthdata = data["monthly_comparison"][0][mon]["CompareCD"];
        od.push(monthdata);
      });
      return od;
    default:
      return null;
  }
}

export default OverallComparison;
