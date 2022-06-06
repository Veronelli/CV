<template>
  <div id="knowledge">
    <p class="conocimientos">~ Conocimientos</p>
    <div class="charts">
<div class="x">
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
      <div class="conocimientos-lenguajes">
      
        <div class="col">

          <div id="chart"></div>
        </div>
        <div class="col">
          <div id="knowledge-repo-percent"></div>
        </div>
      </div></div>
    </div>
  </div>
</template>

<script>
import ApexCharts from "apexcharts";
import Information from "../mock/Information";
import github from "../services/github";

export default {
  name: "AboutKnowledge",
  components: {},

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
    };
  },
  async mounted() {
    console.log(
      (await github.repoPercentLanguage(Information.aboutMySelf.lastname)).map(
        (repo) => repo.repos
      )
    );
    let optionsBarLanguagesKnowLedge = {
      title: {
        text: "Conocimientos en cada lenguaje",
        align: "center",
      },
      chart: {
    width: '100%',
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "sales",
          data: this.chartData.datasets[0].data,
        },
      ],
      xaxis: {
        categories: this.chartData.labels,
      },
    };

    let optionPieLanguagesPercent = {
      title: {
        text: "Cantidad de lenguajes usados en proyectos",
        align: "center",
      },
      series: (
        await github.repoPercentLanguage(Information.aboutMySelf.lastname)
      ).map((repo) => repo.repos),
      labels: (
        await github.repoPercentLanguage(Information.aboutMySelf.lastname)
      ).map((repo) => repo.label),
      chart: {
        type: "donut",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                  fontSize: '28px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val
                  },
                },
                total: {
                  show: true,
                  fontSize:'28px',
                  label: 'Repositorios',
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        },
    };

    let chartBarLanguagesKnowLedge = new ApexCharts(
      document.querySelector("#chart"),
      optionsBarLanguagesKnowLedge
    );
    let chartPieLanguagesPercent = new ApexCharts(
      document.querySelector("#knowledge-repo-percent"),
      optionPieLanguagesPercent
    );

    chartBarLanguagesKnowLedge.render();
    chartPieLanguagesPercent.render();
  },
};
</script>

<style scope>
.idioma {
  background: #199dfd;
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 50px;
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
  margin: auto;
  width: 600px;
  height: 1000px;
}

.idioma > * {
  color: white;
}
.idioma > h2{
  margin-left: 10px;
}
.col {
  flex: 1;
  align-items: center;
}
.col>svg{
  display: flex;
  align-items: center;

}
.conocimientos-lenguajes {
  display: flex;
  width: 1200px;
  height: auto;
  align-items: center;
}
.charts{
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>