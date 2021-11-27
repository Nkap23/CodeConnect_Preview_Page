function App() {
  return (
    <div className="overflow-x-hidden orbitron">

      <div className="flex flex-col text-center items-center justify-around h-screen w-screen bg-gray-900 text-white">
        <div>
          <div className="text-4xl font-medium">CodeConnect</div>
          <div className="text-2xl my-6">Online Collaborative Code Editor & Code Compiler</div>
          <div className="my-10">
            <input className="w-72 sm:w-80 outline-none rounded h-10 px-2 text-gray-900" type="text" placeholder="Enter Room ID" />
          </div>
          <div className="mt-10 animate-pulse text-md">
            <svg className="h-10 inline" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            <br/>
            <span className="font-bold">See Our Pricing</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around h-screen w-screen bg-gray-900 text-white">
        <div> 
          <div className="text-center w-72 sm:w-96 mb-10 h-72 bg-gray-600 rounded">
            <div className="py-5 font-bold">Free Plan</div> 
            <div>POINT HERE</div>
          </div>
          <div className="text-center w-72 sm:w-96 h-72 bg-gray-600 rounded">
            <div className="py-5 font-bold">Premium Plan</div>
            <div>POINT HERE</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around h-screen w-screen bg-gray-900 text-white">
        <div> 
          <div className="text-center w-72 sm:w-96 mb-5 h-48 bg-gray-600 rounded">
          </div>
          <div className="text-center w-72 mb-5 sm:w-96 h-48 bg-gray-600 rounded">
          </div>
          <div className="text-center w-72 sm:w-96 h-48 bg-gray-600 rounded">
            <img className="inline h-32 rounded-full my-3" src="/assets/nisargkapkar.webp"/>
            <div>
              <a className="font-semibold text-blue-300 underline" href="https://www.linkedin.com/in/nisarg-kapkar/">
                NISARG KAPKAR
              </a>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
