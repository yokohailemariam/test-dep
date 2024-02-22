import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { facebook, youtube, tiktok, twitter } from "./assets"
import { Url } from "next/dist/shared/lib/router/router"

export const BASEURL =
  "https://leza-award-backend-api.proudmushroom-13eba283.francecentral.azurecontainerapps.io"

export const IPAPIBASEURL = "https://api.ipify.org"

interface ILogos {
  image: string | StaticImport
  url: Url
  alt: string
}

export const FooterLogos = <ILogos[]>[
  {
    image: facebook,
    url: "https://www.facebook.com/LezaRadioShow",
    alt: "Leza award facebook"
  },
  {
    image: youtube,
    url: "https://www.youtube.com/@lezashowonshegerfm",
    alt: "Leza award youtube"
  },
  {
    image: tiktok,
    url: "https://vm.tiktok.com/ZM6hpUYRC/",
    alt: "Leza award tiktok"
  },
  {
    image: twitter,
    url: "https://x.com/Leza1261264?t=mdAmu1sdz2tLKMRICLAtCQ&s=35",
    alt: "Leza award twitter"
  }
]
