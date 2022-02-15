import Header from "../../components/Header";
import { useEffect, useState, useMemo } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { useRouter } from "next/router";
import { ThirdwebSDK } from "@3rdweb/sdk";
import NFTImage from "../../components/nft/NFTImage";

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/1bMHon_aD3uxtZLhwKs1QylE3XI0IpjF'
    )
    return sdk.getNFTModule('0xD9A85a98b352d1770d6a860A737f48037202c706')
  }, [provider])


  useEffect(() => {
    if (!nftModule) return
      ; (async () => {
        const nfts = await nftModule.getAll()

        const selectedNftItem = nfts.find(
          (nft) => nft.id === router.query.nftId)

        setSelectedNft(selectedNftItem)
      })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/1bMHon_aD3uxtZLhwKs1QylE3XI0IpjF'
    )
    return sdk.getMarketplaceModule('0xe69Bf031fd540881F668294a73A9eC14aC226415')
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
      ; (async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
  }, [marketPlaceModule])

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nft