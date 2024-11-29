import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <div>
      <div className="text-2xl font-bold pt-4 text-gray-500 text-center">
        Our Team
      </div>

      {/* <div className="border-2 border-black rounded w-36 flex flex-row justify-evenly items-center"></div> */}

      <div className="flex flex-row flex-wrap justify-evenly px-12 py-8">
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
      </div>
    </div>
  );
}
