const Experience = () => {
  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Experience
      </h2>
      <div className="space-y-1">
        <article className="p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65]">
          <div className="sm:flex gap-5">
            <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600/[0.65] shadow-sm max-sm:mb-3 sm:mt-5">
              Icon
            </div>
            <div>
              <div className="space-y-1.5 mb-3">
                <div className="text-[13px] italic text-gray-500/70">Date</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  <a className="hover:underline decoration-2 decoration-gray-300 dark:decoration-gray-600 underline-offset-2">
                    Title
                  </a>
                </h3>
                <div className="text-[13px] font-medium text-gray-600dark:text-gray-400">
                  Location
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Description
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
