import * as React from "react";

export default function MyComponent() {
return (
  <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
    <div className="flex flex-col pb-3 pl-4 w-full text-lg leading-5 text-center bg-zinc-300">
      <div className="flex gap-5 mt-2.5 text-black uppercase font-[510]">
        <a href="/myprofile">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2eed8bdc2a74bb8063d940bd15602c9c116a498b0df9f84134d2c668b3743c9f?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
            className="shrink-0 aspect-[1.28] fill-zinc-800 w-[18px]"
          />
        </a>
        <div className="flex-auto">Update Profile</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef14f0662c3585af16ed8317b761004505505e2d11910ce9755c3abf86daf761?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
          className="shrink-0 self-start border-2 border-solid aspect-[1.41] border-neutral-800 stroke-[1.5px] stroke-neutral-800 w-[17px]"
        />
      </div>
    </div>
    <div className="flex flex-col px-4 mt-5 w-full">
      <div className="self-center text-lg leading-5 text-center text-black uppercase font-[510]">
        Edit Profile
      </div>
      <div className="self-center px-16 py-4 mt-4 w-full text-base leading-6 text-center text-black uppercase whitespace-nowrap bg-zinc-300 font-[510]">
        Save
      </div>
      <div className="flex gap-2.5 self-start mt-6 ml-3.5 text-xs leading-5 text-black whitespace-nowrap">
        <div className="font-[510]">Username</div>
        <div className="flex-auto italic font-[590]">
          RAMPUGAL88@GMAIL.COM
        </div>
      </div>
      <div className="self-start mt-4 ml-3.5 text-xs leading-5 text-black font-[510]">
        New Password
      </div>
      <div className="shrink-0 self-center mt-1.5 max-w-full border border-solid border-zinc-300 h-[35px] w-full">.</div>
      <div className="self-start mt-5 ml-3.5 text-xs leading-5 text-black font-[510]">
        Re enter New Password
      </div>
      <div className="shrink-0 self-center mt-1.5 max-w-full border border-solid border-zinc-300 h-[35px] w-full">.</div>
      <div className="self-start mt-3 ml-3.5 text-xs leading-5 text-black font-[510]">
        (Password must be between 5 and 12 characters with no spaces)
      </div>
      <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-200 border-neutral-200" />
      <div className="self-start mt-5 ml-3.5 text-xs leading-5 text-black font-[510]">
        Title
      </div>
      <div className="flex gap-5 justify-between self-center px-3 py-2.5 mt-1.5 w-full text-xs leading-6 text-black whitespace-nowrap border border-solid border-zinc-300 font-[510]">
        <div className="my-auto">Select</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab715fefe89d590987b4ac05d9caaa99e9efe6d59e4a5f6c887cce3128d313c5?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
          className="shrink-0 w-4 aspect-square"
        />
      </div>
      <div className="self-start mt-4 ml-3.5 text-xs leading-5 text-black font-[510]">
        First Name
      </div>
      <div className="flex gap-5 justify-between self-center px-3 py-2.5 mt-1.5 w-full text-xs leading-6 text-black whitespace-nowrap border border-solid border-zinc-300 font-[510]">
        <div className="my-auto">Ram</div>
        
      </div>
      <div className="self-start mt-4 ml-3.5 text-xs leading-5 text-black font-[510]">
        Last Name
      </div>
      <div className="flex gap-5 justify-between self-center px-3 py-2.5 mt-1.5 w-full text-xs leading-6 text-black whitespace-nowrap border border-solid border-zinc-300 font-[510]">
        <div className="my-auto">Pugazh</div>
      </div>
      <div className="self-start mt-4 ml-3.5 text-xs leading-5 text-black font-[510]">
        Date of Birth
      </div>
      <div className="flex gap-5 justify-between self-center px-3 py-2 mt-1.5 w-full text-xs leading-6 text-black border border-solid border-zinc-300 font-[510]">
        <div className="my-auto">May 25, 1988</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/433c9caf26e447836939d394221a2013758e1b3d4b53ce79f1e16cb909ae5d49?apiKey=1bea51d7857d4f90ab3e1959354fec4a&"
          className="shrink-0 aspect-[0.9] w-[18px]"
        />
      </div>
      <div className="self-start mt-3.5 ml-3.5 text-xs leading-5 text-black font-[510]">
        Gender
      </div>
      <div className="flex gap-5 self-start mt-2.5 ml-3.5 text-xs leading-5 text-black whitespace-nowrap font-[510]">
        <div className="flex flex-1 gap-2">
          <div className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300 stroke-[1px]" />
          <div className="my-auto">Male</div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="shrink-0 w-4 h-4 rounded-full border border-solid border-zinc-300 stroke-[1px]" />
          <div className="my-auto">Female</div>
        </div>
      </div>
      <div className="shrink-0 mt-4 h-px border border-solid bg-neutral-200 border-neutral-200" />
      <div className="self-start mt-3.5 ml-3.5 text-xs leading-5 text-black font-[510]">
        Email Address
      </div>
      <div className="flex gap-5 justify-between self-center px-3 py-2.5 mt-1.5 w-full text-xs leading-6 text-black whitespace-nowrap border border-solid border-zinc-300 font-[510]">
        <div className="my-auto">rampugal88@gmail.com</div>
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
        Updates will only apply to you. Any others in your traveling party or
        household will need to log into their My NCL Account to update their
        own contact information, if needed.
      </div>
      <div className="shrink-0 mt-12 bg-zinc-700 h-[5px] rounded-[100px] w-[134px]" />
    </div>
  </div>
);
}

