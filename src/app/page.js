import ResumeUpload from "./components/ResumeUpload";

export default function Home() {
  return (
    <main className="p-4 w-full h-full">
      <div className="flex flex-col items-center w-full h-full">
        <h1 className="text-2xl font-medium mt-12 mb-6 text-gray-800">ResumePrep</h1>
        <ResumeUpload />
      </div>
    </main>
  );
}
