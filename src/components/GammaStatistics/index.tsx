import { calculateClassWiseStatistic } from "../../utils";
import Table from "../Table";
import { rows } from "./rows";

export default function GammaStatistics({ data }: any) {
  const calcGamma = (n1: number, n2: number, d: number) => {
    return (n1 * n2) / d;
  };
  const gammaData = data.map((record: any) => {
    let gamma = calcGamma(
      Number(record.Ash),
      Number(record.Hue),
      Number(record.Magnesium)
    );
    return {
      ...record,
      gamma,
    };
  });

  const gammaStats = calculateClassWiseStatistic(gammaData, "Alcohol", "gamma");

  return <Table data={gammaStats} rows={rows()} />;
}
