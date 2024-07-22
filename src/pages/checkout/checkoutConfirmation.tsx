import * as React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/checkout-additional-input');
  };

  return (
    <div className="flex flex-col pb-6 pl-4 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-5 mt-5 text-base leading-6 text-black font-[510]">
        <div className="flex-auto my-auto">Stateroom & Offers</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="shrink-0 w-4 aspect-square"
        />
      </div>
      <div className="px-5 py-4 mt-8 text-xs leading-5 text-center text-black border border-solid bg-neutral-100 border-neutral-200 font-[510]">
        You have 13 mins 51 secs to complete your reservation.
      </div>
      <div className="flex gap-5 mt-5 text-base leading-6 font-[510] text-neutral-400">
        <div className="flex-auto my-auto">
          Stateroom &gt; <span className="text-neutral-400">Offers</span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c944a572119d1c7342c0b11b151e70d65aab45a203475d3ee37086c8a3e0ac?apiKey=e3022d4918f742d58a54267602e34d98&"
          className="shrink-0 aspect-[1.06] fill-neutral-800 w-[18px]"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/017fbb000b58c564b9150123658438c5a0d5dad95f84c0d93149f2f39599b2d4?apiKey=e3022d4918f742d58a54267602e34d98&"
        className="self-start mt-6 w-full aspect-[2.38]"
      />
      <div className="flex flex-col py-5 mt-6 text-black bg-white border border-solid border-neutral-400">
        <div className="flex flex-col px-4">
          <div className="text-base leading-6 font-[510] text-neutral-400">
            STATEROOM #8078
          </div>
          <div className="mt-3 text-base leading-6 font-[510]">
            Family Inside
          </div>
          <div className="self-start px-1.5 py-2 mt-2.5 text-xs leading-5 bg-zinc-300 font-[510]">
            Best Available
          </div>
          <div className="mt-5 text-xs leading-5 font-[510]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor.
          </div>
          <div className="flex gap-2 items-start mt-5">
            <div className="flex flex-col mt-2.5">
              <div className="text-xs font-bold leading-5">
                Details & Floorplan
              </div>
              <div className="flex gap-2.5 mt-7 text-xs leading-6 text-center uppercase whitespace-nowrap">
                <div className="shrink-0 my-auto h-px border border-solid bg-stone-300 border-stone-300 w-[145px]" />
                <div>or</div>
              </div>
            </div>
            <div className="flex flex-col text-xs font-bold leading-4 text-right">
              <div className="self-end">
                Deck 8 - Aft
                <br />
                Ship Location
              </div>
              <div className="shrink-0 mt-7 h-px border border-solid bg-stone-300 border-stone-300" />
            </div>
          </div>
          <button className="self-center mt-3.5 text-xs font-bold leading-5 text-center">
            Choose a Different Stateroom
          </button>
        </div>
        <div className="self-center mt-3.5 text-xs leading-6 text-center">
          Selecting a different stateroom may result in a change in fare.
        </div>
      </div>
      <div className="flex flex-col px-4 py-5 mt-5 w-full bg-white border border-solid border-stone-300">
        <div className="flex gap-5 items-start">
          <div className="flex flex-col flex-1 text-sm leading-5">
            <div className="text-black uppercase font-[590]">More Offers</div>
            <div className="mt-4 font-[510] text-zinc-500">
              2-For-1 Deposits
            </div>
          </div>
          <div className="text-base leading-6 text-right text-black font-[510]">
            INCLUDED
          </div>
        </div>
        <div className="mt-5 text-xs leading-5 text-black font-[510]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt.
        </div>
      </div>
      <button
        onClick={handleContinueClick}
        className="px-16 py-4 mt-5 text-base leading-6 text-center text-white uppercase whitespace-nowrap bg-[#336296] font-[510]"
      >
        Continue
      </button>
    </div>
  );
}
