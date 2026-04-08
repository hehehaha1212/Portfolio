import { DotLoader } from "react-spinners";

export default function CustomLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a] text-white">
      
      <DotLoader
        color="#38bdf8"
        size={60}
        speedMultiplier={1}
      />

      <h1 className="mt-6 text-xl font-semibold">
        Loading Work 
      </h1>
    </div>
  );
}