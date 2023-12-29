import "./table.css";

interface RowProps {
  title: string;
  dataIndex: string;
  render: any;
}
function Table({ data, rows }: { data: any[]; rows: RowProps[] }) {
  return (
    <table>
      <tbody>
        {rows.map(({ title, dataIndex, render }) => {
          return (
            <tr key={dataIndex}>
              <th>{title}</th>
              {data.map((record, index) => {
                return (
                  <td key={index}>
                    {render && render(record[dataIndex], record, index)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
