
<Reference code >
    import * as React from "react";

    export default function Login() {
      return (
        <div className="flex flex-col items-center pb-2 mx-auto w-full bg-white max-w-[480px]">
          <div className="flex flex-col pb-6 mt-40 w-full text-black bg-white border border-solid border-neutral-200 font-[510] max-w-[357px]">
            <div className="justify-center items-start px-6 py-6 text-lg leading-5 bg-neutral-200">
              Enter Your Account Information
            </div>
            <div className="flex flex-col px-3 mt-7 text-xs leading-5">
              <div>Email address or username</div>
              <input
                type="text"
                className="justify-center items-start p-3 mt-3.5 text-sm leading-5 border border-solid border-zinc-300"
                placeholder="Email address or username"
              />
              <div className="mt-5">Password</div>
              <input
                type="password"
                className="justify-center items-start px-3 py-3.5 mt-3.5 text-sm leading-5 whitespace-nowrap border border-solid border-zinc-300"
                placeholder="Password"
              />
              <div className="flex gap-2 self-start mt-3.5">
                <input
                  type="checkbox"
                  className="shrink-0 border border-solid border-zinc-300 h-[21px] w-[21px]"
                />
                <div className="my-auto">Stay logged in</div>
              </div>
              <div className="mt-5">Forgot Username or Password?</div>
              <button className="justify-center items-center px-16 py-5 mt-5 text-base leading-6 text-center uppercase bg-zinc-300">
                Log In
              </button>
              <div className="mt-7 leading-6 uppercase">
                Need a Brand Name Account?{" "}
                <span className="font-bold uppercase">Register</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
</Reference>

<Instructions>
    - Use the above code snippet to create a Login component.
    - Make sure to use the correct class names for the styles to be applied.
    - The component should look like the reference image when rendered.
    - Code "Log in" button to open the MyProfile component on successful login.
    - Navigate to MyProfile using the react-router-dom. the version is 6.25.1
    - Use the useNavigate hook to navigate to MyProfile component.
    - make sure the page theme color is #336296. The Button would have backgroundColor: '#dff2ff.
    - provide the necessary logic for empty fields validation, show an inline error in red font
    
</Instructions>