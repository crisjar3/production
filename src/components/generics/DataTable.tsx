import { MagicMotion } from "react-magic-motion";

type DataTableProps = {
  title: string;
  subtitle: string;
  headers: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: { [key: string]: any }[];
};

const DataTable: React.FC<DataTableProps> = ({
  title,
  subtitle,
  headers,
  rows,
}) => {
  return (
    <MagicMotion>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {title}
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th scope="col" key={index} className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700`}
              >
                {Object.keys(row).map((key, subIndex) => (
                  <td key={subIndex} className="px-6 py-4">
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MagicMotion>
  );
};

export default DataTable;
