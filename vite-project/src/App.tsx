import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { HeavyCalculations } from "./CustomComponents/HeavyCalculations";
// import { ModeToggle } from "./components/mode-toggle";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ProfileForm } from "./components/example-form";
// import Parent from "./CustomComponents/Parent";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen flex-col items-center justify-center p-8 md:p-12 lg:p-16">
          {/* <div className="flex items-center justify-center gap-4 p-4">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance border-b pb-2">
              Learning and Exploring Shadcn UI
            </h1>
            <Avatar>
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ModeToggle />
          </div> */}
          {/* <div className="flex justify-center items-center">
            <ProfileForm />
          </div> */}
          {/* <Parent /> */}

          
          <HeavyCalculations />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
