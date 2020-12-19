import { useColorMode } from "../../hooks/useColorMode"
import { ColorModeSwitchWrapper } from "./ColorModeSwitch.styles"

const ColorModeSwitch = () => {
  const colorMode = useColorMode()
  return (
    <ColorModeSwitchWrapper type="button" onClick={colorMode.toggle}>
      {colorMode.value === "light" ? "🌝" : "🌞"}
    </ColorModeSwitchWrapper>
  )
}

export default ColorModeSwitch
