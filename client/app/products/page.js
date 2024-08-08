import Navbar from "@/components/Homepage/navbar";
import Footer from "@/components/Homepage/footer";
import styles from "@/app/products/page.css";
import Card from "@/components/products/card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="products">Products</div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
  );
}
