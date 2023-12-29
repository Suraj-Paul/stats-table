import Table from "../Table";
import { calculateClassWiseStatistic } from "../../utils";
import { rows } from "./rows";

export default function FlavonoidStatistics({ data }: any) {
  const flavonoidStats = calculateClassWiseStatistic(data, "Alcohol", "Flavanoids");

  return <Table data={flavonoidStats} rows={rows()} />;
}
