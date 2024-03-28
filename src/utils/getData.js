// export async function getData() {
//   const res = await fetch("./data.json");
//   const data = await res.json();
//   return data;
// }
import data from "../../data.json";

export function getData() {
  return data;
}
