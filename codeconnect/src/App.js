function App() {
  return (
    <div className="overflow-x-hidden orbitron">

      <div className="flex flex-col text-center items-center justify-around h-screen w-screen bg-gray-900 text-white">
        <div>
          <div className="text-4xl font-medium">CodeConnect</div>
          <div className="text-2xl my-6">Online Collaborative Code Editor & Code Compiler</div>
          <div className="my-10">
            <button className="w-72 sm:w-80 outline-none rounded h-10 px-2 text-yellow-700 border-2 border-yellow-700
            hover:text-gray-900 hover:bg-yellow-700 font-bold">Start Trial</button>
          </div>
          <div className="mt-10 animate-pulse text-md">
            <span className="font-bold text-3xl">Our Pricing</span>
            <br/>
            <br/>
            <span className="font-semibold">7 days free trial</span>
            <br/>
            <span className="font-semibold">30$/month afterwards</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
