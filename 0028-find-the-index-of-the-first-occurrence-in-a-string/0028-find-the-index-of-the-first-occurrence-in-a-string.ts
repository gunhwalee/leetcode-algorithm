const strStr = (haystack: string, needle: string): number => {
  let target: number = 0;
  let index: number = 0;

  while (target <= index && index < haystack.length) {
    if (haystack[index] === needle[target]) {
      if (target === needle.length - 1) return index - target;
      target += 1;
    } else {
      index -= target;
      target = 0;
    }
    index += 1;
  }

  return -1;
};