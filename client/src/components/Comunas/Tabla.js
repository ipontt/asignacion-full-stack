function Tabla({ casos }) {
	return (
		<div className="w-full flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-2 border-gray-700 sm:rounded-l-lg overflow-y-scroll max-h-32">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  	Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  	Casos
                  </th>
                </tr>
              </thead>
              <tbody>
                {casos.filter(caso => caso.cantidad != null).map((caso, index) => (
                  <tr key={`tabla-${caso.fecha}`} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                    <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    	{ caso.fecha }
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-800">
                    	{ caso.cantidad }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
	);
}

export default Tabla;
