import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function MyComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pb-2 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col self-stretch pb-2.5 pl-4 w-full text-lg leading-5 text-center" style={{ backgroundColor: "#dff2ff" }}>
        <div className="flex gap-5 justify-center self-center w-full text-black whitespace-nowrap font-[590] max-w-[340px]">
          <div className="my-auto">9:41</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/266a6a33fa2beeaf4c8f10c018fd6ea04b621407fa3055dba8ec613cd62e0ce5?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 max-w-full aspect-[2.56] w-[140px]"
          />
        </div>
        <div className="flex gap-5 items-center mt-1.5 text-black uppercase font-[510]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02eda1cb38bfe9c23fe4fbca40d3500479564462c24a2e67e3f9d48f09f621f9?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 self-stretch w-5 aspect-square"
          />
          <div className="flex-auto self-stretch my-auto">My Account</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef14f0662c3585af16ed8317b761004505505e2d11910ce9755c3abf86daf761?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 self-stretch my-auto border-2 border-solid aspect-[1.41] border-neutral-800 stroke-[1.5px] stroke-neutral-800 w-[17px]"
          />
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
        <button className="flex gap-5 mt-8 uppercase w-full justify-between items-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/ProfileUpdate')}>
          <span className="flex-auto text-left">Edit Profile</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 mt-5 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <button className="flex gap-5 mt-6 uppercase w-full justify-between items-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/SettingUpdate')}>
          <span className="flex-auto text-left">Update Settings</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 mt-6 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
        <button className="flex gap-5 mt-6 uppercase w-full justify-between items-center p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={() => navigate('/Rewards')}>
          <span className="flex-auto text-left">View Latitudes Rewards</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8e9179aa4f29c93b7d75e1382a6157d87d684c4a8ffc6b53a97fb6a662c295?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 w-2.5 border-2 border-solid aspect-[0.56] border-neutral-800 stroke-[2px] stroke-neutral-800"
          />
        </button>
        <div className="shrink-0 mt-6 h-px border border-solid" style={{ backgroundColor: "#dff2ff", borderColor: "#dff2ff" }} />
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
          You currently have no cruise reservations.
        </div>
        <div className="self-center px-16 py-5 mt-5 w-full text-base leading-6 text-center uppercase" style={{ backgroundColor: "#dff2ff", maxWidth: "335px" }}>
          Plan a cruise
        </div>
        <div className="shrink-0 self-center mt-8" style={{ backgroundColor: "#dff2ff", height: "5px", borderRadius: "100px", width: "134px" }} />
      </div>
    </div>
  );
}