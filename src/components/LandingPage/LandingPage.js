export default function LandingPage() {
  return (
    <div className="md:flex flex-row">
      <div className="md:w-1/3 md:h-screen h-auto w-full bg-green-300 flex flex-col items-center justify-center p-8">
        <div>
          <span className="text-3xl font-bold m-4">Venus Sports</span>
          <p className="mt-4">
            At Venus Sports, we are dedicated to fostering a love for volleyball
            while nurturing talent and teamwork. Whether you're a beginner
            looking to learn the fundamentals or an experienced player aiming to
            elevate your game, our club offers the perfect environment for
            growth and excellence.
          </p>
        </div>
      </div>
      <div className="md:w-2/3 md:h-screen h-auto w-full bg-blue-300 flex flex-col items-center justify-center">
        <img
          src="https://images.pexels.com/photos/2257700/pexels-photo-2257700.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="w-full h-81"
        ></img>
      </div>
    </div>
  );
}
