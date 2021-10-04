import { curveCardinal } from 'd3-shape';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Contact = () => {
  const data = [
    {
      name: "FullStack",
      Admission: 300,
      Feedback: 5,
    },
    {
      name: " Digital marketing",
      Admission: 300,
      Feedback: 4,
    },
    {
      name: " App-development",
      Admission: 400,
      Feedback: 5,
    },
    {
      name: " Graphics Design",
      Admission: 300,
      Feedback: 4,
    },
    {
      name: " IELTS Learning",
      Admission: 200,
      Feedback: 3,
    },
    {
      name: " Machine learning",
      Admission: 200,
      Feedback: 5,
    },
    {
      name: " Emotional intelligence",
      Admission: 400,
      Feedback: 4.5,
    },
  ];
  const cardinal = curveCardinal.tension(0.2);
  return (
    <AreaChart
      width={1500}
      height={600}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Admission"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.3}
      />
      <Area
        type={cardinal}
        dataKey="Feedback"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.3}
      />
    </AreaChart>
  );
};

export default Contact;
