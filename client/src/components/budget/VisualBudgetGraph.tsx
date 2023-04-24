import {Doughnut} from 'react-chartjs-2';
import {BudgetOutcome_t} from "./BudgetOutcome";
import {Chart, ArcElement, Tooltip, Legend, ChartOptions} from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend);

export default function GeneratePieGraph(props: { totalExpense: number, totalUncategorized: number, outcomes: Array<BudgetOutcome_t>, totalIncome: number }) {

    let categories: string[] = [];
    let outcomePercentage = [];
    //Iterate through budgetOutcomes 

    for (let i of props.outcomes) {
        //to get spent (vs earned)
        if (i.outcome > 0) {
            //If category exists and isn't a salary (earned money)                  //there must be a better way to check for salary
            if (i.category !== undefined && !categories.includes(i.category) && i.category !== "Regular Salary") {
                categories.push(i.category);
                // Calculate how much of the total income was spent toward a specific category in % and add to its own array
                outcomePercentage.push(Math.round((i.outcome / props.totalExpense) * 100));
            }
        }
    }
    /*      total uncategorized is giving funky numbers rn in the mock so we'll ignore this variable for now in the graph
    //Some funky hurdling since all categorical values can be positive or negative
    //It basically says that if there is only one category in spent then it should be 100% of the pie graph
    if(props.totalUncategorized > 0){
        outcomePercentage.push(Math.round((props.totalUncategorized/props.totalExpense) * 100));
        categories.push("Uncategorized");
    } else {
        if(categories.length == 1){
            outcomePercentage[0] = 100;
        }
    }
    */
    const data = {
        labels: categories,
        datasets: [
            {
                data: outcomePercentage,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            }
        ],
    };
    const options: ChartOptions<'doughnut'> = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (item) =>
                        ` ${item.formattedValue}% of total spent`,
                },
            },
        },
    }

    return (
        <Doughnut
            data={data}
            options={options}
        />
    );
}

