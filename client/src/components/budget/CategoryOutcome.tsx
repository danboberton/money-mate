import {Budget_t} from "./Budget";

export default function CategoryOutcome(props: { outcome: number, capacity: number }) {
    const fullBarLength: number = 150;
    const colorBar = (outcome: number, capacity: number) => {
        const barLength = () => {
            if (outcome >= capacity) {
                return fullBarLength
            } else if (outcome <= 0) {
                return 0
            } else {
                return (outcome / capacity) * fullBarLength
            }
        }

        const barColor = () => {
            if (outcome >= capacity) {
                return "rgb(255, 0, 0)"
            } else if (outcome <= 0) {
                return "rgb(0, 255, 0)"
            } else {
                const ratio = outcome / capacity
                let red, green
                if (ratio >= .5) {
                    red = 255
                    green = 255 - ((ratio - .5) * 255)
                } else if (ratio < .5) {
                    green = 255
                    red = (ratio - .5) * 255
                }
                return "rgb(" + red + ", " + green + ", 0)"
            }
        }


        const containerStyle = {
            alignItems: "left",
            display: "block",
            border: "1px solid black",
            width: fullBarLength + "px",
            height: "20px",
        }
        const colorBarStyle = {
            display: "block",
            backgroundColor: barColor(),
            height: "20px",
            width: barLength() + "px",
        }

        return (
            <div style={containerStyle}>
                <div style={colorBarStyle}></div>
            </div>

        )
    }
    return (
        <div style={{
            display: "flex"
        }}>
            <div style={{width: "49%"}}>$ {props.outcome} / $ {props.capacity}</div>
            <div>{colorBar(props.outcome, props.capacity)}</div>
        </div>
    )
}
