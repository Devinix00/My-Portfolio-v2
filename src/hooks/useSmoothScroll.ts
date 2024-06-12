export default function useSmoothScroll() {
  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return { smoothScroll };
}
