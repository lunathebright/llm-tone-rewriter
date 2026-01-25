import Rewriter from "./components/Rewriter";

export default function Home() {
  return (
    <div className="border border-red-400 flex justify-center items-center h-screen min-h-120">
      <main className="bg-blue-200/30 flex justify-center items-center w-120 h-full">
        <Rewriter />
      </main>
    </div>
  );
}
