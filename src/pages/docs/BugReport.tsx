import Button from "@/components/atoms/Button";
import { useState } from "react";
import { toast } from "sonner";

const BugReport = () => {
  const [bugDescription, setBugDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const userEmail = "tushar.sahu0207@gmail.com";

  const handleBugSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (!bugDescription) {
      alert("Please describe the bug.");
      return;
    }

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bugDescription, userEmail }),
    });

    if (response.ok) {
      setLoading(false);
      toast.success("Bug report submitted successfully!");
      setBugDescription("");
    } else {
      setLoading(false);
      toast.error("Failed to submit bug report.");
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
          className="w-full  bg-transparent p-4 border border-gray-400/10 lg:h-[250px] h-[150px] mt-4 resize-none rounded-lg"
        ></textarea>
        <div className="flex justify-end">
          <Button
            variant="outline"
            type="submit"
            loading={loading}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BugReport;
