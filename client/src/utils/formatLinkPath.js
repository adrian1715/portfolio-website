export const formatLinkPath = (linkPath) =>
  linkPath
    .split("/")[1]
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
