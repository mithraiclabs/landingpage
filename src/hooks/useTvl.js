import {useEffect, useState} from "react";

const useTvl = () => {
  const [tvl, setTvl] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.llama.fi/protocol/psyoptions")
      const json = await response.json();
      const tvlArray = json.chainTvls.Solana.tvl;
      const mostRecentTvl = tvlArray[tvlArray.length - 1];

      setTvl(mostRecentTvl.totalLiquidityUSD);
    })();
  }, []);

  return tvl;
}

export default useTvl;