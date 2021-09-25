import Placeholder from './Placeholder.js';

function App() {
  return (
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <Placeholder class="border-2 border-dashed border-gray-300 rounded bg-white w-full text-gray-200 h-8"/>
          </div>
          <div className="px-4 py-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="lg:col-span-1">
              <Placeholder class="border-2 border-dashed border-gray-300 rounded bg-white w-full text-gray-200 h-72"/>
            </div>
            <div class="lg:col-span-2">
              <Placeholder class="border-2 border-dashed border-gray-300 rounded bg-white w-full text-gray-200 h-72"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
