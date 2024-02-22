"use client";
const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-5xl font-bold">Ooops</p>
        <p className="text-xl font-thin">
          Something went wrong please try again later
        </p>
      </div>
    </div>
  );
};

export default Error;
