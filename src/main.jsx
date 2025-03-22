import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./mainContent";
import Footer from "./footer";
const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
