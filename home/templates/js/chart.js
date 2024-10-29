const categories = ["Electronics", "Home Appliances", "Clothing", "Books", "Beauty Products", "Sports"];
const regions = ["North America", "Europe", "Asia"];
const salesData = {
  "Electronics": [2000, 1500, 3000],
  "Home Appliances": [1000, 2000, 1500],
  "Clothing": [2500, 1800, 2200],
  "Books": [1200, 1000, 1100],
  "Beauty Products": [800, 1600, 1400],
  "Sports": [500, 900, 1300]
};

// Função para encontrar a categoria com maior volume de vendas
function getTopSellingCategory(data) {
  let topCategory = '';
  let maxSales = 0;

  for (const category in data) {
    const totalSales = data[category].reduce((a, b) => a + b, 0);
    if (totalSales > maxSales) {
      maxSales = totalSales;
      topCategory = category;
    }
  }
  return topCategory;
}

// Função para encontrar a região com menor volume de vendas
function getRegionWithLowestSales(data) {
  const regionsTotal = [0, 0, 0]; // Índices: [North America, Europe, Asia]

  for (const sales of Object.values(data)) {
    sales.forEach((amount, index) => {
      regionsTotal[index] += amount;
    });
  }

  const minSales = Math.min(...regionsTotal);
  const lowestRegionIndex = regionsTotal.indexOf(minSales);
  return regions[lowestRegionIndex];
}

// Atualizar o HTML com os dados calculados
document.getElementById("topCategory").textContent = getTopSellingCategory(salesData);
document.getElementById("lowestRegion").textContent = getRegionWithLowestSales(salesData);

// Criação do gráfico
const datasets = Object.keys(salesData).map((category, index) => {
  return {
    label: category,
    data: salesData[category],
    borderColor: `hsl(${index * 60}, 70%, 50%)`,
    fill: false,
  };
});

new Chart("myChart", {
  type: "line",
  data: {
    labels: regions,
    datasets: datasets,
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Sales by Category and Region",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Total Sales ($)',
          }
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Regions',
          },
        },
      ],
    },
    legend: { display: true },
  },

});
