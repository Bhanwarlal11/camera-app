const Spinner = () => {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce400"></div>
        <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce200"></div>
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce400"></div>
      </div>
    );
  };
  
  export default Spinner;