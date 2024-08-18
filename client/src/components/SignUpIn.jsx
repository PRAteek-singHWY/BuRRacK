import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function SignUpIn() {
  return (
    <header>
      <SignedOut>
        <SignInButton>
          <button className="rounded-full bg-[#f3ece6] text-blue-700 px-4 py-2 transition-colors duration-300 hover:bg-blue-700 hover:text-[#f1ece5]">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonTrigger:
                "rounded-full bg-blue-500 text-white px-4 py-2 transition-colors duration-300 hover:bg-white hover:text-blue-500",
            },
          }}
        />
      </SignedIn>
    </header>
  );
}
