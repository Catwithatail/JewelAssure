import Navbar from "@/components/Homepage/navbar";
import Footer from "@/components/Homepage/footer";
import Form from "./form";
import styles from "@/app/register/page.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="reg">Register a new Jewellery</div>
      <Form />
      <Footer />
    </div>
  );
}
