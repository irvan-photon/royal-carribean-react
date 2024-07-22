import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleSelectClick = () => {
    navigate('/checkout-confirmation');
  };

  return (
    <div className="flex flex-col items-center pb-2 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col self-stretch pl-4 w-full text-base leading-6 text-black font-[510]">
        <div className="flex gap-5 mt-5">
          <div className="flex-auto my-auto">Number of Guests & Dates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab715fefe89d590987b4ac05d9caaa99e9efe6d59e4a5f6c887cce3128d313c5?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-4 aspect-square"
          />
        </div>
        <div className="flex gap-3.5 self-start mt-9">
          <div>All Dates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab715fefe89d590987b4ac05d9caaa99e9efe6d59e4a5f6c887cce3128d313c5?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-4 aspect-square"
          />
        </div>
        <button className="mt-6">Compare Staterooms</button>
      </div>
      <div className="flex gap-5 justify-between self-stretch pl-4 mt-4 w-full text-black border border-solid bg-neutral-100 border-neutral-200">
        <div className="flex flex-col my-auto">
          <div className="text-sm font-bold leading-5">Apr 23 - Apr 24</div>
          <div className="mt-3.5 text-xs leading-5 font-[510]">2025</div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e2793f9-b23e-4ebd-bbcd-0a86226b81b9?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="shrink-0 border border-solid aspect-[1.03] border-neutral-200 w-[67px]"
        />
      </div>
      <div className="flex flex-col items-center px-5 mt-4 w-full bg-white border border-solid border-stone-300 max-w-[401px]">
        <button className="self-stretch px-16 py-4 text-sm leading-5 text-center text-black uppercase whitespace-nowrap border border-solid border-stone-300 font-[510]">
          Inside
        </button>
        <div className="mt-4 text-sm leading-5 text-center uppercase font-[510] text-neutral-400">
          $349
        </div>
        <div className="mt-1.5 text-2xl leading-6 text-center text-black uppercase font-[510]">
          $310
        </div>
        <div className="flex gap-3 mt-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff60322ba2200a53e7098da3561c05ac207c4d186c26ae977596e5ba7d6fed7f?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e27a0690d7846ba92f238094df87e466d60cdd85abb76b582ba7ff038827471?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c89241dc316b7631444f0339e094de72a05f2858d7cc082fbc6b4a26a4c5ea2?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
        </div>
        <button
          onClick={handleSelectClick}
          className="self-stretch px-16 py-4 mt-4 text-sm leading-5 text-center text-white uppercase whitespace-nowrap border border-solid bg-[#336296] border-stone-300 font-[510]"
        >
          Select
        </button>
      </div>
      <div className="flex flex-col items-center px-5 mt-2.5 w-full bg-white border border-solid border-stone-300 max-w-[401px]">
        <button className="self-stretch px-16 py-4 text-sm leading-5 text-center text-black uppercase whitespace-nowrap border border-solid border-stone-300 font-[510]">
          Oceanview
        </button>
        <div className="mt-4 text-sm leading-5 text-center uppercase font-[510] text-neutral-400">
          $380
        </div>
        <div className="mt-1.5 text-2xl leading-6 text-center text-black uppercase font-[510]">
          $320
        </div>
        <div className="flex gap-3 mt-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24b7755aa1b772cd7b4779659a27646bbac3f99dea562e6c5351098b244d0538?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21bc697477dd42aabc6532459dd3e5fa91a1908fb3e4f04ab1a903bb94bda623?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b3b40e6df3e9154733735e1c17346f6c55c6a592bbe3011936cbf6d9c784b34?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-[1.06] w-[18px]"
          />
        </div>
        <button
          onClick={handleSelectClick}
          className="self-stretch px-16 py-4 mt-4 text-sm leading-5 text-center text-white uppercase whitespace-nowrap border border-solid bg-[#336296] border-stone-300 font-[510]"
        >
          Select
        </button>
      </div>
    </div>
  );
}
