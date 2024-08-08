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
        <button>Get Started </button>
      </div>
      <div className="title2">Commitment to Confidence</div>
      <div className="contain">
        <div className="c1">
          In an industry where authenticity and transparency are paramount,
          JewelAssure is dedicated to transforming the jewelry market. We
          understand the challenges consumers face with fake products, ethical
          sourcing issues, and complex ownership verifications. Our mission is
          to bring clarity and trust to your jewelry buying experience.
        </div>
        <div className="c2">
          We provide verified information about the origin and craftsmanship of
          each piece, ensuring you receive only genuine jewelry. Our platform
          offers detailed insights into the sourcing and manufacturing
          processes, helping you make informed and ethical purchasing decisions.
          We streamline the process of verifying ownership and authenticity,
          giving you confidence in your investment.
        </div>
      </div>

      <Footer />
    </div>
  );
}
