import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";

const LayoutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Container className="flex-1">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};
export default LayoutPage;
