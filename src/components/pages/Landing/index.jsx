import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20;
    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) clearInterval(scrollInterval);
      else window.scrollBy(0, scrollStep);
    }, 10);
  };

  const handleReadMore = () => window.open('https://www.humanrightsfirst.org', '_blank');

  return (
    <div className="flex flex-col w-full items-center">
      {/* Title Section */}
      <header className="w-full primary-c text-white text-center py-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Asylum Office Grant Rate Tracker</h1>
          <p className="text-lg">
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions.
          </p>
        </div>
      </header>

      <main className="w-full secondary-c px-8 max-w-[1200px] pt-12">
        {/* Graph Section */}
        <section className="grid grid-cols-3 gap-8 mb-12" aria-label="Data Visualization Options">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={barGraph} alt="Bar graph showing grant rates by office" className="w-full h-48 object-contain mb-4" />
            <p className="text-center text-base font-medium">Search Grant Rates By Office</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={pieChart} alt="Pie chart showing grant rates by nationality" className="w-full h-48 object-contain mb-4" />
            <p className="text-center text-base font-medium">Search Grant Rates By Nationality</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img src={lineGraph} alt="Line graph showing grant rates over time" className="w-full h-48 object-contain mb-4" />
            <p className="text-center text-base font-medium">Search Grant Rates Over Time</p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => navigate('/graphs')}
            className="bg-[#666555] text-white px-8 py-4 rounded hover:bg-[#4d4c40] focus:ring-2 focus:ring-offset-2 focus:ring-[#666555]"
          >
            View the Data
          </button>
          <button
            onClick={downloadCSV}
            className="bg-[#666555] text-white px-8 py-4 rounded hover:bg-[#4d4c40] focus:ring-2 focus:ring-offset-2 focus:ring-[#666555]"
          >
            Download the Data
          </button>
        </div>

        {/* Info Section */}
        <section className="grid grid-cols-2 gap-12 mb-12" aria-label="About the Tool">
          <img src={paperStack} alt="Stack of paper documents representing asylum decisions data" className="w-full h-auto rounded-lg shadow-md" />
          <div className="flex items-center justify-center">
            <p>
              Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and
              May 2021 by the USCIS Asylum Office, received through a Freedom of Information Act request. You can search for information on asylum grant
              rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
            </p>
          </div>
        </section>

        {/* Statistics Section */}
        <section aria-labelledby="stats-heading" className="mb-12">
          <h2 id="stats-heading" className="text-3xl font-bold mb-10 text-center">
            Systemic Disparity Insights
          </h2>

          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">36%</h3>
              <p>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016
                to 28 percent in fiscal year 2020.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">5%</h3>
              <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">6x Lower</h3>
              <p>
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </section>

        {/* Read More & Back To Top */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <button
            onClick={handleReadMore}
            className="bg-[#666555] text-white px-8 py-4 rounded hover:bg-[#4d4c40] focus:ring-2 focus:ring-offset-2 focus:ring-[#666555]"
          >
            Read More
          </button>
          <button
            onClick={scrollToTop}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:underline"
          >
            Back To Top ↑
          </button>
        </div>
      </main>
    </div>
  );
};
