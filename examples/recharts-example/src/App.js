//import logo from './logo.svg';
import './App.css';
import {
    Line,
    LineChart,
//    XAxis,
//    YAxis,
    ResponsiveContainer
} from 'recharts';

function App(){
    const data = [
	{
	    ny: -10,
	    florida: 70,
	    date: "Jan 20"
	},
	{
	    ny: 45,
	    florida: 83,
	    date: "Jan 19"
	},
	{
	    ny: 36,
	    florida: 77,
	    date: "Jan 18"
	},
	{
	    ny: 48,
	    florida: 80,
	    date: "Jan 17"
	},
	{
	    ny: 23,
	    florida: 70,
	    date: "Jan 16"
	},
	{
	    ny: 30,
	    florida: 72,
	    date: "Jan 15"
	},
	{
	    ny: 40,
	    florida: 76,
	    date: "Jan 14"
	}
    ];
    
    return (
	<LineChart
	    width={730}
	    height={250}
	    data={data}
	>
	<Line dataKey='ny' stroke='#00FF00' />
	</LineChart>
    );
}

/*
	    <YAxis />
	    <XAxis />
	    
	    <Line dataKey='florida' stroke='#FF0000' />

*/

export default App;
