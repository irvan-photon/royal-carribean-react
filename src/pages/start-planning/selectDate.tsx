import * as React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleSelectClick = () => {
    navigate('/start-planning-detail');
  };

return (
  <>
  <div className="flex flex-col items-center pb-9 mx-auto w-full bg-white max-w-[480px]">
    <div className="self-stretch px-16 py-6 w-full text-base leading-6 text-center text-black uppercase bg-[#dff2ff] font-[510]">
      Dates & Prices
    </div>
    <div className="self-stretch px-7 py-6 text-base leading-6 text-center text-black uppercase bg-[#336296] font-[510] text-white">
      Select a sailing below to view prices
    </div>
    <div className="px-16 py-4 mt-5 w-full text-base leading-6 text-center text-black uppercase whitespace-nowrap bg-[#dff2ff] font-[510] max-w-[361px]">
      2024
    </div>
    <div className="flex flex-col px-5 pb-5 w-full text-base leading-6 text-center text-black uppercase bg-white font-[510] max-w-[401px]">
      <div className="self-center mt-4">aug 4 - aug 11</div>
    </div>
    <div 
      className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
      onClick={handleSelectClick}
    >
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        aug 11 - aug 18
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        aug 18 - aug 25
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        aug 25 - Sep 1
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Sep 1 - Sep 8
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Sep 8 - Sep 15
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Sep 15 - Sep 22
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Sep 22 - Sep 29
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Sep 29 - Oct 6
      </div>
    </div>
    <div className="flex z-10 flex-col px-5 pb-5 w-full bg-white max-w-[401px]">
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Oct 6 - Oct 13
      </div>
    </div>
    <div className="flex flex-col px-5 pt-px pb-4 w-full text-base leading-6 text-center text-black uppercase whitespace-nowrap bg-[#dff2ff] font-[510] max-w-[401px]">
      <div className="self-center mt-3">2025</div>
    </div>
    <div className="flex flex-col px-5 pb-5 w-full text-base leading-6 text-center text-black uppercase bg-white font-[510] max-w-[401px]">
      <div className="self-center mt-4">apr 20 - apr 27</div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        apr 27 - May 4
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        May 4 - May 11
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        May 11 - May 18
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        May 18 - May 25
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        May 25 - Jun 1
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Jun 1 - Jun 8
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Jun 8 - Jun 15
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Jun 15 - Jun 22
      </div>
    </div>
    <div 
  className="flex flex-col px-5 pb-5 w-full bg-white max-w-[401px] cursor-pointer hover:bg-[#dff2ff]"
  onClick={handleSelectClick}
>
      <div className="flex overflow-hidden relative flex-col justify-center border border-solid aspect-[361] border-neutral-200 stroke-[1px] stroke-neutral-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2261bb9fe461c5457460c1506c5d23fd810ce97eba4eb1e7f4c024218b1c412?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
        />
      </div>
      <div className="self-center mt-4 text-base leading-6 text-center text-black uppercase font-[510]">
        Jun 22 - Jun 29
      </div>
    </div>
  </div>


  <div className="flex flex-col mx-auto w-full text-black bg-white max-w-[480px]">
    <div className="flex flex-col pl-4 w-full">
      <div className="mt-9 text-base font-bold leading-6 uppercase">
        Free at sea
      </div>
      <div className="mt-6 text-base leading-6 font-[510]">
        <span className="font-bold">Get all Four Offers</span>
        <br />
        UNLIMITED OPEN BAR
        <br />
        SPECIALTY DINING
        <br />
        FREE EXCURSIONS
        <br />
        FREE WIFI
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d42b63b62f5c6340a256f1669f3d2acff384e9d3ee80b2ed83a2113f743f94c?apiKey=e3022d4918f742d58a54267602e34d98&"
      className="mt-5 w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
    />
    <div className="flex flex-col px-4 mt-5 w-full">
      <div className="flex gap-5">
        <div className="flex-auto text-base font-bold leading-6 uppercase">
          Free at sea
        </div>
        <div className="flex-auto text-sm leading-5 text-right font-[510]">
          Only 3 Days Left
        </div>
      </div>
      <div className="mt-5 text-base leading-6 font-[510]">
        70% OFF 2ND GUEST
        <br />
        FREE AIRFARE^
        <br />
        3RD & 4TH GUEST FOR $99
        <br />
        FREE 3RD & 4TH GUESTS
        <br />
        2-FOR-1 DEPOSITS
        <br />
        RISK-FREE CANCELLATION
      </div>
      <div className="flex flex-col py-6 mt-5 w-full bg-zinc-100">
        <div className="flex flex-col py-6 bg-white border border-solid border-neutral-200">
          <div className="flex flex-col px-8">
            <div className="text-3xl leading-9">
              Staterooms &<br />
              Accommodations
            </div>
            <div className="mt-5 text-base leading-6">
              There's nothing like starting your morning with a glass of
              sunshine and fresh ocean breezes on your own private balcony.
              Our award-winning fleet offers a wide range of contemporary and
              comfortable accommodations designed for you, your family or even
              your group.
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83bc7b17b71c53cfc673be3c839b2fe1607b7762a404c62de6e2c3b15789d35?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="mt-5 w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
          <div className="self-center mt-3.5 text-base font-bold text-center uppercase">
            VIEW ALL STATEROOMS
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/017fbb000b58c564b9150123658438c5a0d5dad95f84c0d93149f2f39599b2d4?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="mt-4 w-full aspect-[2.38]"
        />
        <div className="flex gap-5 justify-between self-center mt-6 text-base text-center uppercase font-[510]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51172b7b769aacf3e1870b16983ab0d1bffade0e6c538ef1167762943ccd4bf?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-12 aspect-[3.45] fill-stone-300"
          />
          <div>1 of 6</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e657d26d42bbe5bec62b229433df4b366e25458876690393a5dc5aa19910b98f?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-12 aspect-[3.45] fill-black"
          />
        </div>
      </div>
    </div>
  </div>
  </>
);
}
