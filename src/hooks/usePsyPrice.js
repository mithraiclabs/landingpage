import { useEffect, useState } from "react"

const usePsyPrice = () => {
  const [price, setPrice] = useState(null)

  useEffect(() => {
    ;(async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=psyoptions&vs_currencies=usd"
      )
      const json = await response.json()

      setPrice(json.psyoptions.usd)
    })()
  }, [])

  return price
}

export default usePsyPrice
