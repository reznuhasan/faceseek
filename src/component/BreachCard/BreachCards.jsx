import React from "react";
import "./BreachCards.css";
import BreachCard from "./BreachCard";

const breaches = [
  {
    logo: "https://ik.imagekit.io/v4fhgjnfk/image.png?updatedAt=1748987237401",
    name: "SoundCloud",
    category: "Music",
    description:
      "In February 2024, the AI-powered visual design platform SoundCloud suffered a data breach that exposed 20M records...",
    compromised: ["Email addresses", "IP addresses", "Names", "Passwords"]
  },
  {
    logo: "https://ik.imagekit.io/v4fhgjnfk/image.png?updatedAt=1748987237401",
    name: "Vimeo",
    category: "Video",
    description:
      "In February 2024, the AI-powered visual design platform Vimeo suffered a data breach that exposed 20M records...",
    compromised: ["Email addresses", "IP addresses", "Names", "Passwords"]
  },
  {
    logo: "https://ik.imagekit.io/v4fhgjnfk/image.png?updatedAt=1748987237401",
    name: "Opencollective",
    category: "Finance",
    description:
      "In February 2024, the AI-powered visual design platform Opencollective suffered a data breach that exposed 20M records...",
    compromised: ["Email addresses", "IP addresses", "Names", "Passwords"]
  },
  {
    logo: "https://ik.imagekit.io/v4fhgjnfk/image.png?updatedAt=1748987237401",
    name: "ok.ur",
    category: "Social",
    description:
      "In February 2024, the AI-powered visual design platform ok.ur suffered a data breach that exposed 20M records...",
    compromised: ["Email addresses", "IP addresses", "Names", "Passwords"]
  }
];

const BreachCards = () => {
  return (
    <div className="card-container">
      {breaches.map((breach, index) => <BreachCard key={index} breach={breach}/>
      )}
    </div>
  );
};

export default BreachCards;
