export default function TeamCard() {
  return (
    <div className="flex flex-col w-96 p-2 mb-4 rounded-xl shadow-lg bg-gray-100 px-4">
      <span className="text-2xl font-semibold py-2">President</span>
      <img
        src="https://images.pexels.com/photos/29501966/pexels-photo-29501966/free-photo-of-professional-portrait-of-young-adult-in-suit.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="ceo"
        className="h-84 w-84 border-4 border-white rounded-xl"
      ></img>

      <span className="text-lg font-medium text-gray-500 py-2">
        Virat Kohli
      </span>
      <span className="text-gray-400 py-2">
        The IPL 2025 mega auction was held over two days in Jeddah. Know which
        player was sold for what
      </span>
    </div>
  );
}
