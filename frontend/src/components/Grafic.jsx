import React, { Component } from 'react';
import { Line } from 'chart.js';


class ChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Ventas mensuales',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <h2>Gráfico de Ventas Mensuales</h2>
        <LineElement
          data={this.state.chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ChartExample;
