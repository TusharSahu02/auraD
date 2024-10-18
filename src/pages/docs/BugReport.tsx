import { useState } from "react";

const BugReport = () => {
  const [bugDescription, setBugDescription] = useState("");

  const handleBugSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bugDescription) {
      alert("Please describe the bug.");
      return;
    }

    console.log("bug report", bugDescription);

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bugDescription }),
    });
    console.log("response -> ", response);

    if (response.ok) {
      alert("Bug report submitted successfully!");
      setBugDescription("");
    } else {
      alert("Failed to submit bug report.");
    }
  };
  return (
    <div className=" h-full">
      <h1 className=" text-center text-gray-300 ml-1">Report Bug</h1>
      <form onSubmit={handleBugSubmit}>
        <textarea
          onChange={(e) => setBugDescription(e.target.value)}
          autoFocus
          placeholder="Describe the bug"
          className="w-full  bg-transparent p-4 border border-gray-400/10 h-[250px] mt-4 resize-none rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BugReport;
