"use client";
import Navbar from "@/components/Homepage/navbar";
import Signin from "@/components/Login/Login";
import Footer from "@/components/Homepage/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Signin />
      <Footer />
    </div>
  );
}
