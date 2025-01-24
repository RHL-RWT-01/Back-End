import { useState } from "react";
import my from "./assets/my.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="bg-black">
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
          <img
            class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={my}
            alt=""
          />
          <div class="space-y-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">Erin Lindford</p>
              <p class="font-medium text-gray-500">Product Engineer</p>
            </div>
            <button class="border-purple-200 text-pink-600 hover:border-transparent hover:bg-pink-900 hover:text-black active:bg-purple-700 ...">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
