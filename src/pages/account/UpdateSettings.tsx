import * as React from "react";

export default function MyComponent() {
  return (
    <div>
      <div className="flex flex-col pb-2 mx-auto w-full bg-white max-w-[480px]">
        <div className="flex flex-col pb-3 pl-4 w-full text-lg leading-5 text-center bg-zinc-300">
          <div className="flex gap-5 mt-2.5 text-black uppercase font-[510]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eed8bdc2a74bb8063d940bd15602c9c116a498b0df9f84134d2c668b3743c9f?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
              className="shrink-0 aspect-[1.28] fill-zinc-800 w-[18px]"
            />
            <div className="flex-auto">Update Settings</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef14f0662c3585af16ed8317b761004505505e2d11910ce9755c3abf86daf761?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
              className="shrink-0 self-start border-2 border-solid aspect-[1.41] border-neutral-800 stroke-[1.5px] stroke-neutral-800 w-[17px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-7 mt-5 w-full text-xs leading-5 text-black font-[510]">
          <div className="self-center text-lg leading-5 text-center uppercase">
            Update Preferences
          </div>
          <div className="mt-5 text-sm leading-4">
            Please tell us more about you and your interests. We look forward to
            welcoming you to the Norwegian Cruise Line Family, and experiencing
            our one of a kind Freestyle Cruising!
          </div>
          <div className="px-16 py-4 mt-3 text-base leading-6 text-center uppercase whitespace-nowrap bg-zinc-300">
            Save
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d577ed834c0678c67e052bb9c6414b247708210d372457cca13a20ceb0ad2c?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
            className="mt-5 w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
          <div className="mt-4 text-base leading-6">
            Destinations you would like to cruise?
          </div>
          <div className="flex gap-5 self-center mt-3 w-full max-w-[304px]">
            <div className="flex flex-col flex-1">
              <div className="flex gap-2.5 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Caribbean</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">South America</div>
              </div>
              <div className="flex gap-2.5 mt-4 leading-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">
                  Canada & New
                  <br />
                  England
                </div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Mexican Riviera</div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Hawaii|</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Panama Canal</div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex gap-2.5 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Weekend</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Pacific Coastal</div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Europe</div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Alaska</div>
              </div>
              <div className="flex gap-2.5 mt-4 leading-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">
                  Bahamas &<br />
                  Florida
                </div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Bermuda</div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d577ed834c0678c67e052bb9c6414b247708210d372457cca13a20ceb0ad2c?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
            className="mt-4 w-full border border-solid border-neutral-200 stroke-[1px] stroke-neutral-200"
          />
          <div className="mt-5 text-base leading-6">Cruising Information</div>
          <div className="mt-3.5">Preferred length of cruise?</div>
          <div className="flex gap-5 justify-between py-2.5 pr-5 pl-2 mt-1 text-xs leading-6 border border-solid border-zinc-300">
            <div className="my-auto">Please Select</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
          <div className="mt-5">When do you plan to book your next cruise?</div>
          <div className="flex gap-5 justify-between py-2.5 pr-5 pl-2 mt-1 text-xs leading-6 border border-solid border-zinc-300">
            <div className="my-auto">Please Select</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
          <div className="mt-4">Preferred time of cruise?</div>
          <div className="shrink-0 mt-2.5 border border-solid border-zinc-300 h-[35px]" />
        </div>
      </div>

      {/* <!--- -> */}

      <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
        <div className="flex flex-col px-4 mt-1.5 w-full text-xs text-black font-[510]">
          <div className="self-start mt-3.5 ml-3.5 leading-[183%]">
            Have you ever cruised?
          </div>
          <div className="flex gap-5 self-start mt-2 ml-3.5 whitespace-nowrap leading-[183%]">
            <div className="flex flex-1 gap-2">
              <div className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300 stroke-[1px]" />
              <div className="my-auto">Yes</div>
            </div>
            <div className="flex flex-1 gap-2">
              <div className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300 stroke-[1px]" />
              <div className="my-auto">No</div>
            </div>
          </div>
          <div className="self-start mt-5 ml-3.5 leading-[183%]">
            How many times have you cruised?
          </div>
          <div className="flex gap-5 justify-between py-2.5 pr-5 pl-2 mt-1 text-xs leading-6 border border-solid border-zinc-300">
            <div className="my-auto">Please Select</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fff4afec0fbd285aac20eead4476f7e1b5727b5715bff1032de5dc4662e0d94?apiKey=e3022d4918f742d58a54267602e34d98&&apiKey=e3022d4918f742d58a54267602e34d98"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
          <div className="self-center mt-3.5 text-base leading-6">
            Which of the following cruise lines have yousailed?
          </div>
          <div className="flex gap-5 self-center mt-4 leading-[183%]">
            <div className="flex flex-col flex-1">
              <div className="flex gap-2.5 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Princess</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Royal Caribbean</div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Celebrity</div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex gap-2.5 whitespace-nowrap">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Carnival</div>
              </div>
              <div className="flex gap-2.5 mt-4 whitespace-nowrap leading-[117%]">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Disney</div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Holland America</div>
              </div>
            </div>
          </div>
          <div className="self-start mt-3.5 ml-3.5 text-base leading-6">
            Preferred method of booking?
          </div>
          <div className="flex gap-5 justify-between self-center mt-4 w-full max-w-xs">
            <div className="flex flex-col self-start">
              <div className="flex gap-2.5 leading-[183%]">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">Travel Agent</div>
              </div>
              <div className="flex gap-2.5 mt-4 leading-4">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">
                  Online using
                  <br />
                  NCL.com
                </div>
              </div>
            </div>
            <div className="flex flex-col leading-4">
              <div className="flex gap-2.5">
                <div className="shrink-0 border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div className="my-auto">
                  Online Travel
                  <br />
                  Site
                </div>
              </div>
              <div className="flex gap-2.5 mt-4">
                <div className="shrink-0 self-start border border-solid border-zinc-300 h-[30px] w-[30px]" />
                <div>
                  Via phone with a vacation
                  <br />
                  olanner
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="px-16 py-4 mt-12 text-base leading-6 text-center uppercase whitespace-nowrap bg-zinc-300 w-full">
              Save
            </div>
          </div>
          <div className="px-16 py-4 mt-2.5 w-full text-base leading-6 text-center uppercase whitespace-nowrap border border-solid border-zinc-300">
            Cancel
          </div>
          <div className="self-stretch px-2.5 py-6 mt-5 text-sm leading-4 bg-zinc-100">
          Please note that it may take up to 15 min. for your account preferences to be updated.
          </div>
        </div>
      </div>
    </div>
  );
}