 // 1. Find duplicates: Filter non-firstoccurrences, then deduplicate with Set.
const findDuplicates = arr => [...new Set(arr.filter((item, i) => arr.indexOf(item) !== i))];

// 2. Count fellows above X: Filter array by score threshold and return count.
const countFellowsAboveScore = (fellows, X) => fellows.filter(f => f.score > X).length;

// 3. Group by category: Reduce array into an object keyed by item category.
const groupByCategory = items => items.reduce((acc, item) => ((acc[item.category] = acc[item.category] || []).push(item.name), acc), {});

// 4. Get top fellow: Reduce array to find and return highest scoring object.
const getTopFellow = fellows => fellows.reduce((max, f) => (f.score > max.score ? f : max));