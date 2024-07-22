import * as React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/');
  };

return (
  <div className="flex flex-col pb-7 pl-4 mx-auto w-full text-black bg-white max-w-[480px]">
    <div className="flex gap-5 mt-5 text-base leading-6 font-[510]">
      <div className="flex-auto">Guest information & Payment</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&"
        className="shrink-0 self-start w-4 aspect-square"
      />
    </div>
    <div className="flex gap-5 justify-between mt-6">
      <div className="flex flex-col text-xs leading-5 font-[590]">
        <div className="font-[510]">Price summary</div>
        <div className="mt-2.5 text-base leading-6">Total</div>
        <div className="mt-3">Offers and Price Breakdown</div>
      </div>
      <div className="flex flex-col self-start mt-5 text-right">
        <div className="self-end text-base leading-6 font-[590]">$845.38</div>
        <div className="mt-3 text-xs leading-5 font-[510]">
          Includes Taxes & Free
        </div>
      </div>
    </div>
    <div className="px-3.5 py-4 mt-6 text-xs leading-5 border border-solid bg-neutral-100 border-neutral-200 font-[510]">
      You have 14 mins 49 secs to complete your reservation.
    </div>
    <div className="mt-5 text-base leading-6 font-[510] text-neutral-400">
      Guest Information &gt; <span className="text-neutral-400">Payment</span>
    </div>
    <div className="px-3.5 py-4 mt-5 text-xs leading-5 border border-solid bg-neutral-100 border-neutral-200 font-[510]">
      Note: Please ensure the first and last names match the government-issued
      IDs you’ll be travelling with.
    </div>
    <div className="flex flex-col py-5 mt-5 text-xs leading-5 bg-white border border-solid border-neutral-400">
      <div className="flex flex-col px-3.5 font-[510]">
        <div className="text-base leading-6">Primary Guest</div>
        <div className="mt-3.5">
          Already have an account? <button className="text-blue-500 underline">LOG IN</button>
        </div>
        <div className="mt-7">First Name</div>
        <input className="shrink-0 mt-1.5 border border-solid border-zinc-300 h-[35px] px-2" />
        <div className="mt-5">Last Name</div>
        <input className="shrink-0 mt-1.5 border border-solid border-zinc-300 h-[35px] px-2" />
        <div className="mt-5">Gender</div>
        <div className="flex gap-5 self-start mt-3 whitespace-nowrap">
          <div className="flex flex-1 gap-2">
            <input type="radio" id="male" name="gender" value="male" className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300" />
            <label htmlFor="male" className="my-auto">Male</label>
          </div>
          <div className="flex flex-1 gap-2">
            <input type="radio" id="female" name="gender" value="female" className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300" />
            <label htmlFor="female" className="my-auto">Female</label>
          </div>
        </div>
        <div className="mt-6">Date of Birth (MM/DD/YYYY)</div>
        <div className="flex gap-2.5 mt-1 whitespace-nowrap">
          <div className="flex gap-5 justify-between px-3 py-2.5 border border-solid border-zinc-300">
            <div className="my-auto">Month</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6be91054-e1fd-4a0a-88e1-15bffc71326f?apiKey=e3022d4918f742d58a54267602e34d98&width=2000 2000w"
            className="shrink-0 max-w-full border border-solid aspect-[3.03] border-zinc-300 w-[105px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd852c8a-aa0d-423a-902d-3c26f9654fe0?apiKey=e3022d4918f742d58a54267602e34d98&width=2000 2000w"
            className="shrink-0 max-w-full border border-solid aspect-[3.03] border-zinc-300 w-[105px]"
          />
        </div>
        <div className="mt-6">Email</div>
        <input className="shrink-0 mt-1.5 border border-solid border-zinc-300 h-[35px] px-2" />
        <div className="mt-5">Phone Number</div>
        <input className="shrink-0 mt-1.5 border border-solid border-zinc-300 h-[35px] px-2" />
        <div className="flex gap-2.5 mt-10 text-xs leading-3">
          <input type="checkbox" id="createAccount" className="shrink-0 border border-solid border-zinc-300 h-[21px] w-[21px]" />
          <label htmlFor="createAccount" className="flex-auto">
            Create an account for easy access to cruise planning, Latitudes rewards, and more.
          </label>
        </div>
        <button className="self-end mt-5 font-bold text-right uppercase px-4 py-2 bg-[#336296] text-white rounded-md">
          Apply
        </button>
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-stone-300 border-stone-300" />
      <div className="self-start mt-5 ml-3.5 font-bold">GUEST 2</div>
    </div>
    <div className="mt-7 text-base leading-6 font-[510]">Travel Add-Ons</div>
    <div className="flex flex-col py-6 pr-11 pl-3.5 mt-4 w-full text-xs leading-5 bg-white border border-solid border-neutral-400 font-[510]">
      <div>PRE-PAID SERVICE CHARGES</div>
      <div className="mt-4 text-base leading-6">Pre-Paid Service Charges</div>
      <div className="mt-4 leading-5">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </div>
      <div className="flex gap-2.5 mt-4 text-xs leading-3">
        <input type="checkbox" id="prePay" className="shrink-0 border border-solid border-zinc-300 h-[21px] w-[21px]" />
        <label htmlFor="prePay" className="flex-auto my-auto">
          I want to pre-pay my service charges
        </label>
      </div>
      <div className="mt-5 text-base leading-6 font-[590]">$45</div>
      <div className="mt-3 font-[590]">USD/Stateroom</div>
      <div className="mt-6 text-base leading-6 font-[590]">$25</div>
      <div className="mt-3 font-[590]">USD/Stateroom</div>
    </div>

    <div className="flex flex-col py-6 pr-11 pl-4 mt-5 w-full text-xs leading-5 bg-white border border-solid border-neutral-400 font-[510]">
      <div>BOOKSAFE TRAVEL PROTECTION</div>
      <div className="mt-4 text-base leading-6">
        Help Protect Your Purchase
      </div>
      <div className="mt-2">(Recommended)</div>
      <div className="mt-6 leading-5">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      </div>
      <div className="mt-3.5">And more...</div>
      <div className="flex gap-2 self-start mt-5 whitespace-nowrap">
        <input type="radio" id="platinum" name="protection" value="platinum" className="shrink-0 w-4 h-4 rounded-full border border-solid border-neutral-400 stroke-[1px]" />
        <label htmlFor="platinum" className="my-auto">Platinum</label>
      </div>
      <div className="self-start mt-3 ml-6 text-base leading-6 font-[590]">
        $25
      </div>
      <div className="mt-2.5 ml-6 leading-5 font-[590]">
        USD/Stateroom
        <br />
        <button className="font-bold text-blue-500">View Plan Details</button>
      </div>
      <div className="flex gap-2 self-start mt-10 whitespace-nowrap">
        <input type="radio" id="standard" name="protection" value="standard" className="shrink-0 w-4 h-4 rounded-full border border-solid border-neutral-400 stroke-[1px]" />
        <label htmlFor="standard" className="my-auto">Standard</label>
      </div>
      <div className="self-start mt-3 ml-6 text-base leading-6 font-[590]">
        $150
      </div>
      <div className="mt-2.5 ml-6 leading-5 font-[590]">
        USD/Stateroom
        <br />
        <button className="font-bold text-blue-500">View Plan Details</button>
      </div>
      <div className="flex gap-2 mt-10 text-base leading-6 font-[590]">
        <input type="radio" id="noRisk" name="protection" value="noRisk" className="shrink-0 w-4 h-4 rounded-full border border-solid border-neutral-400 stroke-[1px]" />
        <label htmlFor="noRisk" className="flex-auto">No, I am Willing To Take The Risk</label>
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