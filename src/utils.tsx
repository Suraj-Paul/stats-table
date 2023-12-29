export const calculateMean = (numbers: any) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }
  const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
  return (sum / numbers.length).toFixed(3);
};

export const calculateMedian = (numbers: any) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const length = numbers.length;
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  if (length % 2 === 1) {
    // For odd-length arrays, return the middle element
    return (sortedNumbers[Math.floor(length / 2)]).toFixed(3);
  } else {
    // For even-length arrays, return the average of the two middle elements
    const middle1 = sortedNumbers[length / 2 - 1];
    const middle2 = sortedNumbers[length / 2];
    return ((middle1 + middle2) / 2).toFixed(3);
  }
};

export const calculateMode = (numbers: any) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  const frequencyMap = new Map();

  // Count the occurrences of each number
  numbers.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  let maxFrequency = 0;
  let modes: any = [];

  // Find the numbers with the highest frequency
  frequencyMap.forEach((frequency, num) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modes = [num];
    } else if (frequency === maxFrequency) {
      modes.push(num);
    }
  });

  // If all numbers occur the same number of times, there is no mode
  if (modes.length === numbers.length) {
    return null;
  }

  return modes;
};

const groupBy = (arr: any, key: string) => {
  return arr.reduce((result: any, item: any) => {
    // Extract the value for the grouping key dynamically
    const keyValue = item[key];

    // Check if the key already exists in the result object
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    // Push the item to the corresponding group
    result[keyValue].push(item);

    return result;
  }, {});
};

export const calculateClassWiseStatistic = (
  array: any,
  key: string,
  calcKey: string
) => {
  return Object.entries(groupBy(array, key)).map(
    ([groupName, groupData]: any) => {
      const mean = calculateMean(groupData?.map((e: any) => e[calcKey]));
      const median = calculateMedian(groupData?.map((e: any) => e[calcKey]));
      const mode = calculateMode(groupData?.map((e: any) => e[calcKey]));
      return { groupName, mean, median, mode };
    }
  );
};
