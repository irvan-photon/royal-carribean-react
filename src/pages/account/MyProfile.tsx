import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function MyComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pb-2 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col self-stretch pb-2.5 pl-4 w-full text-lg leading-5 text-center" style={{ backgroundColor: "#dff2ff" }}>
        <div className="flex gap-5 pt-8 items-center mt-1.5 text-black uppercase font-[510]">
          <div className="flex-auto self-stretch my-auto">My Account</div>
        </div>
      </div>
      <div className="mt-7 text-2xl leading-6 text-center text-black uppercase font-[510]">
        Ram Pugazh
      </div>
      <div className="mt-4 text-base leading-4 text-center text-black uppercase font-[510]">
        Guest #1233456789
      </div>
      <div className="flex flex-col px-10 py-8 mt-7 text-center text-black whitespace-nowrap rounded-full" style={{ backgroundColor: "#dff2ff", fontSize: "510", height: "149px", width: "149px" }}>
        <div className="self-center text-4xl leading-4 uppercase">0</div>
        <div className="mt-6 text-xl leading-5">
          Reward
          <br />
          Points
        </div>
      </div>
      <div className="shrink-0 mt-7 max-w-full h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff", width: "361px" }} />
      <div className="mt-4 text-base italic leading-5 text-center text-black">
        Latitudes Tier Level: First Timer
      </div>
      <div className="flex flex-col self-stretch px-4 mt-5 w-full text-lg leading-5 text-black font-[510]">
        <div className="shrink-0 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <button className="flex gap-5 p-2 pt-8 pb-8 uppercase w-full justify-between items-center hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/ProfileEdit')}>
          <span className="flex-auto text-left">Edit Profile</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <button className="flex gap-5 uppercase w-full justify-between items-center p-2 pt-8 pb-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/UpdateSettings')}>
          <span className="flex-auto text-left">Update Settings</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <button className="flex gap-5 uppercase w-full justify-between items-center p-2 pt-8 pb-8 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/Rewards')}>
          <span className="flex-auto text-left">View Latitudes Rewards</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <div className="flex gap-4 items-center px-px mt-12 text-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6fda5c836ed5ec4f24f36c370b9277ef7164cfaa5fae8ffaab88a26662384d?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 self-stretch my-auto w-28 max-w-full border border-solid aspect-[100] border-stone-300 stroke-[1px] stroke-stone-300"
          />
          <div className="flex-auto self-stretch">My Vacations</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c6fda5c836ed5ec4f24f36c370b9277ef7164cfaa5fae8ffaab88a26662384d?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 self-stretch my-auto w-28 max-w-full border border-solid aspect-[100] border-stone-300 stroke-[1px] stroke-stone-300"
          />
        </div>
        <div className="self-center mt-9 text-sm leading-4 text-center">
            Upcoming: Alaska - Glacier Bay, Skagway & Juneau.
        </div>
        <button className="self-center px-16 py-5 mt-5 w-full text-base leading-6 text-center uppercase" style={ {backgroundColor: "#dff2ff", maxWidth: "335px" }} onClick={() => navigate('/Itinerary')}>
            See your itinerary
        </button>
        <div className="shrink-0 self-center mt-8" style={{ backgroundColor: "#dff2ff", height: "5px", borderRadius: "100px", width: "134px" }} />
      </div>
    </div>
  );
}