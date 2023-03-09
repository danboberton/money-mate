import {Budget_t} from "./Budget";

export default function CategoryOutcome(props: {outcome: number, capacity: number}){

    const colorBarStyle = (outcome: number, capacity: number)=> {


        return(
            {
                "background-color": "blue",
                "width": "50px"
            }
        )
    }
    return(
        <div>
            $ {props.outcome} / $ {props.capacity}
            <div style={colorBarStyle(props.outcome, props.capacity)} ></div>
        </div>
    )
}