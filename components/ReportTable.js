import useResource from "../hooks/useResource";

export default function ReportTable(props) {
  const { deleteResource, resources, loading } = useResource();
  if (loading) {
    return <p>Loading</p>;
  } else if (resources.length == 0) {
    return <h2 className="text-center">No Cookie Stands Available</h2>;
  } else {
    return (
      <table className="border border-collapse border-gray-900 rounded-md bg-green-500">
        <thead className="bg-green-500">
          <tr>
            <th>Location</th>
            {props.working_time.map((item) => {
              return <th>{item}</th>;
            })}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody className="border border-collapse border-gray-900">
          {resources?.map((item) => {
            return (
              <tr
                key={item.id}
                className="border border-collapse border-gray-900"
              >
                <td className="border border-collapse border-gray-900 w-40">
                  {item.location}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => deleteResource(item.id)}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </td>

                {item.hourly_sales.map((item) => {
                  return (
                    <td className="border border-collapse border-gray-900">
                      {item}
                    </td>
                  );
                })}
                <td className="border border-collapse border-gray-900">
                  {item.hourly_sales.reduce((x, y) => x + y, 0)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-green-500 border border-collapse border-gray-900">
          <tr className="border border-collapse border-gray-900">
            <th className="border border-collapse border-gray-900">Totals</th>
            {props.totalperhour.map((item) => {
              return (
                <td className="border border-collapse border-gray-900">
                  {item}
                </td>
              );
            })}
            <td className="border border-collapse border-gray-900">
              {props.totaloftotal}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
