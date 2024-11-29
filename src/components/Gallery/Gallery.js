import ground1 from "../../assets/ground1.jpeg";
import groundGroupPic from "../../assets/groundGroupPic.jpeg";
import groundGroupPic2 from "../../assets/groundGroupPic2.jpeg";
import diwaliGround from "../../assets/diwaliGround.jpeg";

export default function Gallery() {
  return (
    <div className="flex flex-col mx-12">
      <div className="text-2xl font-bold pt-4 text-gray-500 py-6">Gallery</div>
      <div className="flex flex-wrap flex-row justify-evenly">
        <img
          className="h-72 w-72 border-4 border-white rounded-lg"
          src={ground1}
        ></img>
        <img
          className="h-72 w-72 border-4 border-white rounded-lg"
          src={groundGroupPic}
        ></img>
        <img
          className="h-72 w-72 border-4 border-white rounded-lg"
          src={groundGroupPic2}
        ></img>
        <img
          className="h-72 w-72 border-4 border-white rounded-lg"
          src={diwaliGround}
        ></img>
      </div>
    </div>
  );
}
