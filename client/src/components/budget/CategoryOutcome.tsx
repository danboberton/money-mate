export default function CategoryOutcome(props: { outcome: number, capacity: number }) {
    const fullBarLength: number = 150;
    const colorBar = (outcome: number, capacity: number) => {
        const containerStyle = {
            alignItems: "left",
            display: "block",
            border: "1px solid black",
            width: fullBarLength + "px",
            height: "20px",
        }
        const colorBarStyle = {
            display: "block",
            backgroundColor: "blue",
            height: "20px",
            width: "100px",
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