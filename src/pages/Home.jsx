import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="bg-primary">
      <Hero />
      <div className="flex justify-between">
        <Card
          title="Notes"
          description="Get access to high quality Paper 4 and Paper 2 notes."
          buttonText="View Notes"
        />
        <Card
          title="Past Papers"
          description="Get hands On practice by exploring past papers."
          buttonText="View Past Papers"
        />
        <Card
          title="Premium notes"
          description="Just get best notes for P4 and P2 practice"
          buttonText="View Notes"
        />
        <Card
          title="Lectures"
          description="High Quality video lectures"
          buttonText="View Lectures"
        />
      </div>
    </div>
  );
};

export default Home;
