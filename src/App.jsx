import { Menu, ArrowRight, Dot, Send } from "lucide-react";
const App = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="/" className="font-bold text-lg">
            Lyf_/)
          </a>
          <a className="text-gray-600 hover:underline hidden md:inline">
            isurance@tiropay.au
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-full border border-black font-semibold bg-white hidden md:inline">
            Log In
          </button>
          <button className="h-10 px-4 rounded-full font-semibold bg-black text-white hidden md:inline">
            Get Started
          </button>
          <button className="h-10 w-10 flex items-center justify-center ">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto flex flex-col gap-y-5 m-auto mt-[10vh] justify-center items-center text-center">
        <div>
          <h1 className="font-bold text-2xl md:text-5xl leading-snug md:leading-tight">
            Life Planning, Making <br />
            Easy to Turn Dreams a Reality.
          </h1>
        </div>
        <p className="text-gray-600 text-sm md:text-base mt-2">
          Get Exclusive offers on purchase of any plans
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-xl gap-3 mt-4">
          <div className="flex items-center border border-black rounded-full  px-4 py-2 gap-2 w-full max-w-md">
            <Send className="w-5 h-5 " />
            <input
              type="text"
              placeholder="Your Email"
              className="outline-none flex-1 bg-transparent text-sm"
            />
          </div>
          <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-xl">
            Sign Up
          </button>
        </div>
      </main>
      <div className="flex flex-row text-center justify-between my-5">
        <h2 className="font-bold font-sans text-xl">Featured Plans</h2>
        <p className="font-semibold">Explore All</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mb-10  ">
        {/* first card */}
        <div className="bg-[#5ecba1] rounded-2xl p-5">
          <span className="text-[#005935] font-bold text-xs">STRATEGY</span>
          <p className="font-bold text-2xl my-3">Money Momentum</p>
          <p className="font-medium text-xs">
            Track Premium helps you start saver investments insights covering
          </p>
          <hr className="my-3 h-[0.3px] border-none bg-black" />
          <span className="text-[#005935] font-bold text-xs ">3 yrs CAGR</span>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl my-2">7.20%</p>
            <button>
              <ArrowRight className="bg-black text-white text-sm p-1 rounded-md" />
            </button>
          </div>
        </div>
        {/* second card */}
        <div className="bg-black rounded-2xl p-5 text-white">
          <span className="text-white font-bold text-xs">PLANS</span>
          <p className="font-bold text-2xl my-3">Long-Term</p>
          <p className="font-medium text-xs">
            Create a vision, To get started, imagine your dream life
          </p>
          <hr className="my-3 h-[0.3px] border-none bg-white" />
          <span className=" font-bold text-xs ">25 yrs CAGR</span>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl my-2">14.20%</p>
            <button>
              <ArrowRight className="bg-white text-black text-sm p-1 rounded-md" />
            </button>
          </div>
        </div>
        {/* third card */}
        <div className="bg-[#ca9bf9] rounded-2xl p-5 text-black">
          <span className="text-[#704892] font-bold text-xs">STRATEGY</span>
          <p className="font-bold text-2xl my-3">Focussed</p>
          <p className="font-medium text-xs">
            Be focused Life planning,however, can serve as a roadmap or guide.
          </p>
          <hr className="my-3 h-[0.3px] border-none bg-black" />
          <span className="text-[#704892] font-bold text-xs ">
            1 years CAGR
          </span>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl my-2">11.20%</p>
            <button>
              <ArrowRight className="bg-black text-white text-sm p-1 rounded-md" />
            </button>
          </div>
        </div>
        {/* fourth card */}
        <div className="bg-[#f7fd91] rounded-2xl p-5">
          <span className="text-[#9a9f42] font-bold text-xs">PLANS</span>
          <p className="font-bold text-2xl my-3">Fixed Income</p>
          <p className="font-medium text-xs">
            Get multiple benefits, and lumpsum option & Guaranteed Returns
          </p>
          <hr className="my-3 h-[0.3px] border-none bg-black" />
          <span className="text-[#9a9f42] font-bold text-xs ">
            5 years CAGR
          </span>
          <div className="flex flex-row justify-between">
            <p className="font-bold text-2xl my-2">8.20%</p>
            <button>
              <ArrowRight className="bg-black text-white text-sm p-1 rounded-md" />
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="my-3 h-[0.3px] border-none bg-black" /> */}
      <footer className="flex flex-row justify-between items-center text-center py-5 border-t">
        <div className="flex flex-row justify-center gap-x-6">
          <p>Terms Policy</p>
          <Dot className="w-4 h-4" />
          <p>Customer Story</p>
        </div>
        <ArrowRight className="h-10 w-10 p-2 rounded-full border border-black" />
      </footer>
    </div>
  );
};

export default App;
