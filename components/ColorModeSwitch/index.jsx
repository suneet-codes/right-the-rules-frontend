import { useColorMode } from "../../hooks/useColorMode"
import { P } from "../../elements"
import { ColorModeSwitchWrapper } from "./ColorModeSwitch.styles"

const ColorModeSwitch = () => {
  const colorMode = useColorMode()
  return (
    <ColorModeSwitchWrapper type="button" onClick={colorMode.toggle}>
      <P>{colorMode.value === "light" ? "🌝" : "🌞"}</P>
    </ColorModeSwitchWrapper>
  )
}

export default ColorModeSwitch
