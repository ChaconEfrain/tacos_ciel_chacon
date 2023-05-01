export default function handler(req, res) {
  if (req.method !== "POST") throw new Error("Only post method allowed");
}
