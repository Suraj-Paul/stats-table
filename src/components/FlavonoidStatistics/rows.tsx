export const rows = () => {
    return [
      {
        title: "Measure",
        dataIndex: "groupName",
        key: "groupName",
        render: (groupName: any) => `Class ${groupName}` || "NA",
      },
      {
        title: "Flavonoids Mean",
        dataIndex: "mean",
        key: "mean",
        render: (mean: any) => mean || "NA",
      },
      {
        title: "Flavanoids Median",
        dataIndex: "median",
        key: "median",
        render: (median: any) => median || "NA",
      },
      {
        title: "Flavanoids Mode",
        dataIndex: "mode",
        key: "mode",
        render: (mode: any) =>
          Array.isArray(mode) ? mode?.join(", ") : mode || "NA",
      },
    ];
  };