import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="">
        <Hero />
      </section>

      {/* Cards Section */}
      <section className="w-full px-4 sm:px-8 lg:px-16  flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full max-w-7xl">
          <Card
            title="Notes"
            description="Get access to high-quality Paper 4 and Paper 2 notes."
            buttonText="View Notes"
          />
          <Card
            title="Past Papers"
            description="Get hands-on practice by exploring past papers."
            buttonText="View Past Papers"
          />
          <Card
            title="Premium Notes"
            description="Get the best notes for P4 and P2 practice."
            buttonText="View Notes"
          />
          <Card
            title="Lectures"
            description="High-quality video lectures."
            buttonText="View Lectures"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
