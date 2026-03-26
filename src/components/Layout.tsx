import { ReactNode } from "react";
import UrgencyBar from "./UrgencyBar";
import Navbar from "./Navbar";
import TrustTicker from "./TrustTicker";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <UrgencyBar />
    <Navbar />
    <TrustTicker />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
