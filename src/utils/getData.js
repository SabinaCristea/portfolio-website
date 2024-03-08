export async function getData() {
  const res = await fetch("./skillsData.json");
  const data = await res.json();
  return data;
}
