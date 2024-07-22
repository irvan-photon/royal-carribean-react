import * as React from "react";
import { itineraryData } from "../model/itinerary";

export default function Itinerary() {
  return (
    <div className="flex flex-col pb-14 mx-auto w-full bg-white max-w-[480px]">
        <div className="flex flex-col self-stretch pb-2.5 pl-4 w-full text-lg leading-5 text-center" style={{ backgroundColor: "#dff2ff" }}>
        <div className="flex gap-5 pt-8 items-center mt-1.5 text-black uppercase font-[510]">
          <div className="flex-auto self-stretch my-auto">My Itinerary</div>
        </div>
      </div>
      <div className="flex flex-col  w-full text-black">
        <img
          loading="lazy"
          src={itineraryData.imageSrc}
          className="self-start w-full aspect-[2.38]"
        />
        <div className="mt-7 text-base leading-6 uppercase font-[510]">
          Itinerary Map
        </div>
        <div className="mt-8 text-sm leading-4">
          {itineraryData.title}
        </div>
        <div className="mt-3.5 text-2xl font-bold leading-7 max-w-[300px]">
          {itineraryData.subtitle}
        </div>
        <div className="mt-2.5 text-sm leading-4">{itineraryData.location}</div>
        <div className="mt-3 text-base leading-5">
          {itineraryData.description}
        </div>
        {itineraryData.highlights.map((highlight, index) => (
          <div key={index} className="mt-7 text-sm font-bold leading-4">
            {highlight}
          </div>
        ))}
        <div className="flex gap-5 self-start mt-8 text-sm font-bold leading-4 uppercase whitespace-nowrap">
          <div className="flex flex-1 gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c944a572119d1c7342c0b11b151e70d65aab45a203475d3ee37086c8a3e0ac?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 aspect-[1.06] fill-neutral-800 w-[18px]"
            />
            <div className="my-auto">Save</div>
          </div>
          <div className="flex flex-1 gap-2 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d2a808f0fced14ad3ffb1617dfba6cac554a8753e50817227aa3d09330303b3?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 w-5 aspect-[1.25] fill-neutral-800"
            />
            <div className="my-auto">Share</div>
          </div>
        </div>
        <div className="mt-7 text-lg leading-4 text-neutral-400">{itineraryData.prices.original}</div>
        <div className="text-2xl font-bold leading-4">
          {itineraryData.prices.discounted} <span className="text-base">PP/USD</span>
        </div>
        <div className="justify-center items-start px-2.5 py-4 mt-1.5 text-sm leading-4 bg-zinc-100">
          {itineraryData.includes}
        </div>
        <div className="flex gap-0.5 items-start pb-6 pl-5 mt-3.5 border border-solid bg-stone-50 border-stone-300">
          <div className="flex flex-col flex-1 mt-4 text-base font-bold">
            <div className="self-center text-base leading-6 text-center uppercase">
              Free at sea
            </div>
            <div className="mt-7 leading-[147%]">Get all Four Offers</div>
            <div className="mt-5 leading-4 font-[510]">
              UNLIMITED OPEN BAR
              <br />
              SPECIALTY DINING
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="justify-center px-8 py-4 text-base font-bold leading-6 text-center uppercase border border-solid bg-zinc-300 border-stone-300">
              Upto 20% Free
            </div>
            <div className="mt-11 text-base leading-4 font-[510]">
              FREE EXCURSIONS
              <br />
              FREE WIFI
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-6 pl-5 mt-5 w-full border border-solid bg-stone-50 border-stone-300">
          <div className="flex gap-5 text-base font-bold leading-6 text-center uppercase">
            <div className="grow my-auto">Home Offer</div>
            <div className="justify-center px-6 py-4 border border-solid bg-zinc-300 border-stone-300">
              Only 3Days left
            </div>
          </div>
          <div className="mt-6 text-base leading-6 font-[510]">
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
        </div>
        <div className="justify-center items-center px-16 py-4 mt-5 text-base leading-6 text-center text-black uppercase bg-zinc-300 font-[510]">
          Start Planning
        </div>
      </div>
      <div className="flex flex-col px-10 py-5 mt-5 w-full text-center text-black bg-zinc-100 font-[510]">
        <div className="text-3xl leading-9">
          {itineraryData.note}
        </div>
        <div className="mt-6 text-sm leading-5">
          {itineraryData.sailDates}
        </div>
      </div>
      <div className="justify-center items-start px-4 py-6 w-full text-sm leading-5 text-black uppercase bg-neutral-100 font-[510]">
        {itineraryData.itineraryOverview}
      </div>
      <div className="flex flex-col px-5 mt-7 w-full">
        {itineraryData.itinerary.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-start justify-between text-sm leading-5 uppercase whitespace-nowrap font-[510] text-stone-500">
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-5">
                  <div className="shrink-0 rounded-full bg-stone-300 h-[19px] w-[19px]" />
                  <div className="my-auto">{item.day}</div>
                </div>
                <div className="flex flex-col items-start pl-11 mt-2">
                  <div className="font-bold text-black">{item.location}</div>
                  <div className="mt-3 font-[510] text-stone-500">
                    {item.time}
                  </div>
                </div>
              </div>
              <img
                key={index}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76437f79b12f6d15f4cd311f4ad59913e6ab3ec9064cd4b1e73145fbe1f3efd6?apiKey=e3022d4918f742d58a54267602e34d98&"
                className="aspect-square w-[22px] ml-4"
              />
            </div>
          </React.Fragment>
        ))}
        <div className="self-center mt-1.5 text-sm leading-5 font-[510] text-stone-500">
          {itineraryData.itinerary[5].time}
        </div>
      </div>
      <div className="justify-center items-center self-center px-16 py-4 mt-4 w-full text-base leading-6 text-center text-black uppercase bg-zinc-300 font-[510] max-w-[359px]">
        Show 1 more day
      </div>
      <div className="justify-center items-end px-16 py-6 w-full text-sm leading-5 text-right text-black uppercase bg-neutral-100 font-[510]">
        Itinerary map
      </div>
      <div className="flex flex-col pr-12 pl-4 mt-7 w-full text-sm leading-5 text-black font-[510]">
        <div className="text-lg leading-5">Need to Know:</div>
        <div className="mt-5 uppercase">Itinerary Overview:</div>
        <div className="mt-3 text-base leading-5">{itineraryData.itineraryOverview}</div>
        <div className="mt-3 uppercase">Day-by-Day:</div>
      </div>
    </div>
  );
}
