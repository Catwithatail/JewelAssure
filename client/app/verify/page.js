import Navbar from "@/components/Homepage/navbar";
import Footer from "@/components/Homepage/footer";
import InputBar from "./inputbar";
import styles from "@/app/verify/page.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="titlem">Verify the authenticity</div>
      <InputBar />
      <Footer />
    </div>
  );
}
