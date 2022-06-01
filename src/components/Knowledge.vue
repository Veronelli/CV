<template>
  <div id="knowledge">
    <p class="conocimientos">~ Conocimientos</p>
    <div class="charts">
      <div class="conocimientos-lenguajes">
        <bar
          ref="bar"
          :chart-options="chartOptions"
          :chart-data="chartData"
          height="100"
        ></bar>
        <div class="idioma">
          <h2>Idioma</h2>
          <table>
            <tbody>
              <tr>
                <td>Ingles</td>
                <td>Básico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import Information from "../mock/Information";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "AboutKnowledge",
  components: {
    Bar,
  },

  data() {
    return {
      chartData: {
        labels: Information.lenguajes.lenguajes,
        datasets: [
          {
            label: "Conocimiento %",
            data: Information.lenguajes.nivel,
          },
        ],
      },
      chartOptions: {
          type:'line',
        responsive: true,
        backgroundColor: "rgba(25,157,253,0.8)",
        scales: {
          y: {
            max: 100,
          },
        },
      },
      donutChart: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          animateRotate: false,
        },
      },
      donutData:{
        labels: ['skill1'],
        datasets: [
          {
            backgroundColor: "rgba(25,157,253,0.8)",
            data: [1]
          }
        ]
      }
    };
  },
};
</script>

<style scope>
.idioma {
  background: #199dfd;
  width: 100%;
  border-collapse: collapse;
  margin: 40px 0px;
}
table {
  width: 100%;
}
table > h3 {
  width: 100%;
  border-bottom: 1px solid black;
}
tr > td:first-child {
  font-weight: 700;
}
tr > * {
  font-size: 20px;
}
.conocimientos {
  font-size: 40px;
  color: #199dfd;
  padding: 30px;
  font-weight: bold;
}
.conocimientos-lenguajes {
  width: 600px;
  height: 1000px;
}

.idioma > * {
  color: white;
}
</style>