import Spinner from "@/components/spinner";

function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Spinner />
    </div>
  );
}

export default Loading;
