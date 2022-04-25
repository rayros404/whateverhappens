import { IconButton } from "@mui/material"
import Image from "next/image"
import twitterIcon from "./SocialsIcons/twitterIcon.png"
import instagramIcon from "./SocialsIcons/instagramIcon.png"
import tiktokIcon from "./SocialsIcons/tiktokIcon.png"
import depopIcon from "./SocialsIcons/depopIcon.png"

const Socials = () => {
  return (
    <div>
      <IconButton>
        <Image src={depopIcon}/>
      </IconButton>
      <IconButton>
        <Image src={instagramIcon}/>
      </IconButton>
      <IconButton>
        <Image src={twitterIcon}/>
      </IconButton>
      <IconButton>
        <Image src={tiktokIcon}/>
      </IconButton>
    </div>
  )
}

export default Socials