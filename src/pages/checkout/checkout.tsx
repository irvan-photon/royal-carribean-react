import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/checkout-date-confirmation');
  };

  return (
    <div className="flex flex-col mx-auto w-full max-w-[480px]">
      <div className="flex gap-5 justify-between px-7 py-4 w-full text-black bg-zinc-100">
        <div className="flex flex-col">
          <div className="flex gap-3.5 text-base leading-6 font-[510]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d39f123fa1dc79d2b94e17e6aa1ccb98feb4e0f14df7c2666382ac152134a73?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 self-start aspect-[1.05] w-[22px]"
            />
            <div className="flex-auto">1-Day on Norwegian Sun</div>
          </div>
          <div className="self-start ml-9 text-lg font-bold leading-5">
            Australia
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3594ee304fd681e979d549471182dc36e8bc59c863b8feb097796e1ade092bb?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="shrink-0 my-auto aspect-square fill-neutral-800 w-[23px]"
        />
      </div>
      <div className="flex flex-col px-4 mt-7 w-full text-black font-[510]">
        <div className="flex gap-5 px-px text-base leading-6">
          <div className="flex-auto my-auto">Number of Guests & Dates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/025dfd0d3cd9f4d26e9baa8e597e030293c3d63055371ac378a8d18d0d498b52?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-4 aspect-square"
          />
        </div>
        <div className="self-end mt-8 text-xs leading-6 text-right">
          Latitudes Rewards Member? <button className="font-bold">LOG IN</button>
        </div>
      </div>
      <div className="flex flex-col px-4 mt-9 w-full text-black">
        <div className="text-base leading-6 font-[510] text-neutral-400">
          Number of Guests &gt; <span className="text-neutral-400">Dates</span>
        </div>
        <div className="flex gap-5 justify-between items-start p-6 mt-12 w-full bg-zinc-100">
          <div className="flex flex-col self-start text-sm leading-5">
            <div className="uppercase">Stateroom</div>
            <div className="mt-7 font-[510]">Number of Guests</div>
          </div>
          <div className="flex gap-5 justify-between self-end mt-8 text-lg leading-5 text-center whitespace-nowrap font-[510]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bbe5867853e513d99b73362b739ff71a3b9eef949b3bb2422a05cc08d580108?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 aspect-square w-[22px]"
            />
            <input
              type="number"
              value="2"
              className="my-auto text-center w-10"
              readOnly
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/376b1ce269d987a84e05b15b56bbdd81029b4dc67cc5d91986eb28a50fc6c0b8?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 aspect-square w-[22px]"
            />
          </div>
        </div>
        <button
          onClick={handleContinue}
          className="px-16 py-4 mt-10 text-base leading-6 text-center uppercase whitespace-nowrap bg-[#336296] text-white font-[510]"
        >
          Continue
        </button>
      </div>
      <div className="flex flex-col items-center px-16 pt-5 pb-2 mt-80 w-full bg-white">
      </div>
    </div>
  );
}
