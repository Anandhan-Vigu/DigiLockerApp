import React, { useEffect, useState } from "react";
import UtilityModal from "./PopupModel";
import { useNavigate } from "react-router";

interface UtilityItem {
  image: string;
  label: string;
  description?: string;
  link: string
}

interface UtilityGridProps {
  name: string;
}

const UtilityGrid: React.FC<UtilityGridProps> = ({ name }) => {
  const [utilities, setUtilities] = useState<UtilityItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<UtilityItem | null>(null);
  const navigate = useNavigate(); // <-- add this
console.log('received',name)
  useEffect(() => {
    fetch(`/home-json/${name}.json`)
      .then((res) => res.json())
      .then((data) => setUtilities(data))
      .catch((err) => console.error("Failed to load utilities:", err));
  }, [name]);

  return (
    <div>
      {/* ---- Grid ---- */}
      <div className="grid grid-cols-3 w-full gap-2">
        {utilities.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 h-32 pt-5 pl-3 pr-5 rounded-md cursor-pointer hover:bg-gray-200 transition"
            onClick={() => {
              setSelectedItem(item)
            }}
          >
            <img src={item.image} alt={item.label} className=" h-10 mb-4" />
            <div className="wrap-break-words text-sm text-black">{item.label}</div>
          </div>
        ))}
      </div>

      {/* ---- Modal ---- */}
      {selectedItem && (
        <UtilityModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
};

export default UtilityGrid;
