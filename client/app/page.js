import Navbar from "@/components/Homepage/navbar";
import Footer from "@/components/Homepage/footer";
import card from "@/components/products/card";
import styles from "@/app/page.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <card />
      <div className="title">JewelAssure</div>
      <div className="titlecont">
        Ensuring Transparency and Authencty in jewelry
      </div>
      <div className="mainimg">
        <img
          src="https://www.igi.org/wp-content/uploads/IlanTache_IGI_14.jpg"
          alt="Jewelry"
        />
      </div>
      <div className="gs">
        <button>Get Started</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
