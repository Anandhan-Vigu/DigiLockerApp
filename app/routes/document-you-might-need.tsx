import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useParams } from "react-router"; // ✅ use react-router-dom
interface BoardItem {
  name: string;
  state: string;
}

interface Board {
  title: string;
  image: string;
  content: BoardItem[];
}

const DocumentYouMightNeed = () => {
  const { name } = useParams<{ name: string }>(); // ✅ get path param
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [boards, setBoards] = useState<BoardItem[]>([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;

    setLoading(true);
    console.log("Fetching data for:", name);

    fetch(`/json-data/document-you-might-need-items-data/${name}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data: Board) => {
        setBoards(data.content || []);
        setTitle(data.title || "Documents");
        setImage(data.image || "");
      })
      .catch((err) => console.error("Failed to load documents:", err))
      .finally(() => setLoading(false));
  }, [name]);

  // ✅ Only filter when there is a search query
  const displayedBoards =
    search.trim() === ""
      ? boards
      : boards.filter(
        (b) =>
          b.name.toLowerCase().includes(search.toLowerCase()) ||
          b.state.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="min-h-screen  text-black relative">
      {/* Header */}
      <div className="flex items-center justify-between fixed top-0 h-16 w-full z-5 px-5 bg-white">
        <div className="flex gap-5 items-center">
          <button className="text-2xl font-bold" onClick={() => navigate('/')}>
            <FaArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold ">
            {title}
          </h1>
        </div>
        <FiSearch className="w-5 h-5" onClick={() => setShowSearch((s) => !s)}
        />
      </div>

      {/* Search bar */}
      {showSearch && (
        <input
          type="text"
          placeholder="Search for documents"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-18 w-full mx-5 p-2 border border-gray-500 rounded-2xl text-lg"
        />
      )}


      {/* Content */}
      <div className={`flex flex-col gap-4 px-6 ${!showSearch ? 'pt-20' : 'pt-5'}`}>
        {loading ? (
          <p className="text-gray-500 text-center">Loading documents for: {name}</p>
        ) : displayedBoards.length > 0 ? (
          displayedBoards.map((board, index) => (
            <div key={index} className="flex items-center gap-2 h-16">
              <div className="bg-blue-50 h-full w-14 flex items-center justify-center">
                <img src={image} alt="profile" className="h-5 w-5 " />
              </div>
              <div>
                <p className="text-base">{board.name}</p>
                <p className="text-sm text-gray-600">{board.state}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-5">No matching documents found.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentYouMightNeed;
