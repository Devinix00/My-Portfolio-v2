import { useEffect, useState } from "react";

export default function useDevice() {
  const [device, setDevice] = useState<Device>();

  const handleResize = () => {
    const innerWidth = window.innerWidth;
    switch (true) {
      case innerWidth > 0 && innerWidth < 640:
        setDevice("sm");
        break;

      case innerWidth >= 640 && innerWidth < 768:
        setDevice("md");
        break;

      case innerWidth >= 768 && innerWidth < 1024:
        setDevice("lg");
        break;

      case innerWidth >= 1024:
        setDevice("2xl");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    handleResize();

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return { device };
}
