import BigNumber from "bignumber.js";

const seedsPerPage = 128;

const MAX_ADDRESSES = new BigNumber(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
  16
);

const MAX_PAGES = MAX_ADDRESSES.dividedToIntegerBy(seedsPerPage).plus(1);

export default function hexKeys(match) {
  const currentPage = new BigNumber(match.params.page);
  const startSeed = new BigNumber(seedsPerPage).multipliedBy(
    currentPage.minus(1)
  );

  const hexKeys = generateHexKeys(startSeed, seedsPerPage);

  return {
    currentPage: currentPage.toString(),
    startSeed: startSeed.toString(),
    hexKeys: hexKeys,
  };
}

function generateHexKeys(startSeed, pageSize) {
  const hexKeys = [];
  let currentHex = startSeed.plus(1);

  for (let i = 0; i < pageSize; i++) {
    hexKeys.push(currentHex.toString(16).padStart(64, '0'));
    currentHex = currentHex.plus(1);
  }

  return hexKeys;
}
