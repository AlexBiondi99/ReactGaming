import { Card } from "./Card";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
export function HomePage() {
  return (
    <>
      <div className="homePage">
        <Navbar />
        <Card />
      </div>
      <Footer />
    </>
  );
}
