import * as React from "react";
import { cruisesData } from '../model/cruises'

export default function Home() {
  return (
    <div className="flex flex-col mx-auto w-full text-black bg-white max-w-[480px]">
      <div className="flex flex-col pl-4 w-full">
      <div className="relative flex flex-col self-stretch pt-2.5 pb-2.5 w-full text-lg leading-5 text-center" style={{ backgroundColor: "#dff2ff" }}>
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://www.royalcaribbean.com/content/dam/royal/resources/icons/logo/royal-caribbean-logo-no-border.svg"
            className="shrink-0 aspect-[1.2] fill-neutral-800 w-[200px] h-[50px]"
          />
        </div>
        <div className="absolute top-[25px] right-5">
          <a href="/login" className="text-sm font-[510] hover:text-neutral-600 px-4 py-2 rounded">Sign In</a>
        </div>
      </div>
        <div className="flex gap-5 mt-5 text-xs leading-5 uppercase font-[510]">
          <div className="grow my-auto"></div>
          <div className="my-auto">Sort by</div>
          <div className="flex flex-auto gap-5 justify-between py-2.5 pr-7 pl-3.5 whitespace-nowrap border border-solid border-zinc-300">
            <div className="my-auto">Featured</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/025dfd0d3cd9f4d26e9baa8e597e030293c3d63055371ac378a8d18d0d498b52?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col py-6 pr-7 pl-2.5 mt-12 text-sm bg-zinc-100">
          <div className="leading-4 font-[590]">
            PRICING MADE EASY: Pricing Includes all taxes, fees and port expenses.
          </div>
          <div className="mt-4 leading-[121%]">
            Per person based on double occupancy.
          </div>
        </div>
        {cruisesData.map((cruise) => (
          <div key={cruise.id} className="flex flex-col pl-4 w-full">
            <img
              loading="lazy"
              srcSet={cruise.imageSrcSet}
              className="self-start mt-7 w-full border border-solid aspect-[2.38] border-neutral-800 fill-white stroke-[1px] stroke-neutral-800"
            />
            <div className="mt-5 text-sm leading-4">{cruise.title}</div>
            <div className="mt-2.5 text-lg font-bold leading-4">{cruise.subtitle}</div>
            <div className="mt-2 text-sm leading-4">{cruise.departure}</div>
            <div className="mt-3.5 text-sm leading-4">{cruise.sailing}</div>
            <div className="flex gap-1 self-start mt-3 text-sm leading-4 uppercase font-[590]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fcc8c5a6ffce670ed6b18f3821b287b89206fe3aae48bd02e32dda8020f2d9?apiKey=e3022d4918f742d58a54267602e34d98&"
                className="shrink-0 aspect-square w-[9px]"
              />
              <button className="my-auto">View More</button>
            </div>
            <div className="flex flex-col pb-4 mt-3.5 w-full text-base leading-6 uppercase bg-white font-[510]">
              <div className="border-t-2" />
              <div className="flex gap-5 mt-4">
                <div className="flex-auto">{cruise.portsOfCall}</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7eb711f9f48e2717fd1d69eb1619d17a4b8f6ec27c933b2dd95e266639fbf0?apiKey=e3022d4918f742d58a54267602e34d98&"
                  className="shrink-0 w-3.5 aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col pb-4 text-base leading-6 uppercase bg-white font-[510]">
              <div className="border-t-2" />
              <div className="mt-4">Itinerary Map</div>
            </div>
            <div className="border-t-2" />
            <div className="mt-3 text-lg leading-4 text-neutral-400 mb-2">{cruise.price}</div>
            <div className="flex flex-col pb-4 text-base leading-6 uppercase bg-white font-[510]">
              <div className="border-t-2" />
              <div className="mt-3">{cruise.additionalInfo}</div>
            </div>
            <div className="border-t-2" />
            <div className="mt-3 text-lg leading-4 text-neutral-400 mb-2">{cruise.discountedPrice}</div>
            <div className="flex flex-col pb-4 text-base leading-6 uppercase bg-white font-[510]">
              <div className="border-t-2" />
              <div className="mt-3">{cruise.offer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}