import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyComponent() {
  const navigate = useNavigate();

  const handleDateClick = () => {
    navigate('/checkout-card-price-confirm');
  };

  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col pl-4 w-full text-base leading-6 text-black font-[510]">
        <div className="px-3.5 py-4 mt-6 text-xs leading-5 border border-solid bg-neutral-100 border-neutral-200">
          Pricing includes all taxes, fees and port expenses. Per person based
          on double occupancy.
        </div>
        <div className="flex gap-3.5 self-start mt-4">
          <div>All Dates</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab715fefe89d590987b4ac05d9caaa99e9efe6d59e4a5f6c887cce3128d313c5?apiKey=e3022d4918f742d58a54267602e34d98&"
            className="shrink-0 w-4 aspect-square"
          />
        </div>
        <button className="mt-6">Compare Staterooms</button>
      </div>
      <div className="px-11 py-7 mt-4 text-sm font-bold leading-5 text-center text-black border border-solid bg-neutral-100 border-neutral-200">
        SELECT A SAILING BELOW TO VIEW PRICES
      </div>
      <input
        type="text"
        value="2025"
        className="self-center px-16 py-3.5 mt-6 max-w-full text-sm font-bold leading-5 text-center text-black whitespace-nowrap bg-zinc-100 w-[259px]"
        readOnly
      />
      <button
        onClick={handleDateClick}
        className="self-center px-16 py-6 mt-4 max-w-full text-sm font-bold leading-5 text-center text-white bg-[#336296] w-[259px]"
      >
        APR 23 - APR 24
      </button>
      <div className="flex gap-5 justify-between self-center mt-9 w-full text-black max-w-[353px]">
        <div className="flex flex-col">
          <div className="text-base font-bold leading-6 uppercase">
            Home Offer
          </div>
          <div className="mt-8 text-base leading-6 font-[510]">
            70% OFF 2ND GUEST
            <br />
            2-FOR-1 DEPOSITS
            <br />
            RISK-FREE CANCELLATION
          </div>
        </div>
        <div className="self-start text-sm leading-5 text-center">
          Only 2 Days left
        </div>
      </div>
    </div>
  );
}
