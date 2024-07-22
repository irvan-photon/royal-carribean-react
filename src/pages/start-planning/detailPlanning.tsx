import * as React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col items-center pl-4 w-full text-center text-black">
        <div className="flex flex-col self-stretch px-7 py-7 bg-[#dff2ff]">
          <div className="self-center text-lg font-bold leading-5">
            Experience Norwegian Encore
          </div>
          <div className="mt-3.5 text-base leading-6 font-[510]">
            Welcome aboard your best vacation yet.
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0874a2c5a382ea7dfc3a4d38f7bb11a10176a6208d0943a3f6144fdd1cf25dea?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="mt-7 max-w-full aspect-square w-[122px]"
        />
        <div className="mt-3 text-base leading-6 font-[510]">Best New Ship</div>
      </div>
      
      <div className="mt-5 flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
        </div>
      <div className="flex gap-5 justify-between items-center self-center px-5 w-full text-center text-black max-w-[319px]">
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-2xl leading-6 font-[510]">2019</div>
          <div className="mt-8 text-sm leading-5">Year Build</div>
        </div>
        <div className="shrink-0 self-stretch w-px border border-solid bg-neutral-200 border-neutral-200 h-[101px]" />
        <div className="flex flex-col self-stretch my-auto">
          <div className="self-center text-2xl leading-6 font-[510]">4,213</div>
          <div className="mt-7 text-sm leading-5">Double Occupancy</div>
        </div>
      </div>
      <div className="mb-5 flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
        </div>

      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex gap-5 self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase font-[510] max-w-[399px]">
          <div className="flex-auto my-auto">Dining</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
        </div>
        <div className="flex gap-5 self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase font-[510] max-w-[399px]">
          <div className="flex-auto my-auto">BARS & LOUNGES</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
        </div>
        <div className="flex gap-5 self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase whitespace-nowrap font-[510] max-w-[399px]">
          <div className="flex-auto my-auto">ENTERTAINMENT</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
        </div>
        <div className="flex gap-5 justify-between self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase whitespace-nowrap font-[510] max-w-[399px]">
          <div className="my-auto">ACTIVITIES</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
        </div>
        <div className="flex gap-5 justify-between self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase whitespace-nowrap font-[510] max-w-[399px]">
          <div className="my-auto">Spa</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <div className="flex flex-col pb-3 w-full bg-white hover:bg-[#dff2ff] cursor-pointer" onClick={handleOnClick}>
        <div className="flex overflow-hidden relative flex-col justify-center w-full border border-solid aspect-[393] border-neutral-200 stroke-[1px] stroke-neutral-200">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
        </div>
        <div className="flex gap-5 self-center px-5 mt-3 w-full text-base leading-6 text-black uppercase font-[510] max-w-[399px]">
          <div className="flex-auto my-auto">ONBOARD SHOPPING</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3847b62a477b49b44079cd6990eb6dc3156eb58c7966e0f58221771a6f2048d?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 aspect-square w-[22px]"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
        className="mt-5 w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
      />
      <div className="flex flex-col items-center px-16 pt-5 pb-2 mt-4 w-full bg-white">
        <div className="shrink-0 bg-zinc-700 h-[5px] rounded-[100px] w-[134px]" />
      </div>
    </div>
  );
}