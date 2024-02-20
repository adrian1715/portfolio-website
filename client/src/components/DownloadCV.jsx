import React, { useState } from "react";

const DownloadCV = ({ ...props }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const pdfUrl = "/cv-pt.pdf";

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "curriculum.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <button {...props} onClick={handleDownload}>
      Download CV<i className="bi bi-file-earmark-text-fill ms-2"></i>
    </button>
  );
};

export default DownloadCV;
