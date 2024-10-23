import React, { useState } from "react";

const incidentTypes = [
  { name: "Avalanche", icon: "🏔️" },
  { name: "Biological", icon: "🧬" },
  { name: "Blizzard", icon: "❄️" },
  { name: "Cold/Freezing", icon: "🥶" },
  { name: "Drought", icon: "🌵" },
  { name: "Earthquake", icon: "🌍" },
  { name: "Flooding", icon: "🌊" },
  { name: "Heat Wave", icon: "🔥" },
  { name: "Hail", icon: "🌨️" },
  { name: "Lightning", icon: "⚡" },
  { name: "Man Made", icon: "🛑" },
  { name: "Mudslide", icon: "🏞️" },
  { name: "Severe Storm", icon: "⛈️" },
  { name: "Strong Wind", icon: "🌬️" },
  { name: "Tornado", icon: "🌪️" },
  { name: "Tsunami", icon: "🌊" },
  { name: "Volcanic Eruption", icon: "🌋" },
  { name: "Wildfire", icon: "🔥" },
];

export default function IncidentForm() {
  const [selectedIncident, setSelectedIncident] = useState("");

  const handleSelect = (incident) => {
    setSelectedIncident(incident);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-700">New Incident</h1>
        <p className="text-sm text-gray-500">Which of these best describes the incident?</p>
      </header>

      {/* Incident Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {incidentTypes.map((incident) => (
          <button
            key={incident.name}
            onClick={() => handleSelect(incident.name)}
            className={`flex items-center justify-center border rounded-lg p-4 text-gray-700 transition-colors 
              ${
                selectedIncident === incident.name
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            <span className="mr-2">{incident.icon}</span>
            <span>{incident.name}</span>
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Back</button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          disabled={!selectedIncident}
        >
          Next step
        </button>
      </div>
    </div>
  );
}
