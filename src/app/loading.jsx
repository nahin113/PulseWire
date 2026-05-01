const LoadingPage = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-xl text-primary"></span>
        <p className="text-sm font-medium text-slate-500 animate-pulse">
          Loading your experience...
        </p>
      </div>
    );
};

export default LoadingPage;