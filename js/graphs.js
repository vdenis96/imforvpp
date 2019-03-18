//pie char on dashboard
let myChart = document.getElementById('myChart').getContext('2d');
let massPopChart = new Chart(myChart, {
  type: 'pie',
  data: {
    labels: ['Carbune', 'Nuclear', 'Gaze Naturale', 'Hidro', 'Eolian', 'Fotovoltaic', 'Biomasa', 'Biogaz'],
    datasets: [{
      label: 'Productie',
      data: [2193, 1336, 1000, 1865, 532, 116, 63, 50],
      backgroundColor: ['#4D5356', '#8DC73F', '#FFC141', '#1896E3', '#D5EDFF', '#093A7D', '#4AD592', '#B7BF69'],

    }],
  },
  options: {
    title: {
      display: true,
      text: 'Total Produs'
    },
    legend: {
      position: 'top'
    }
  }
});

let ore = ["08", "09", "10", "11", "12", "13", '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '01', '02', '03', '04', '05', '06', '07']

//carbune
var ctx1 = document.getElementById("carbune").getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Carbune',
      data: [80, 75, 90, 110, 100, 90, 85, 80, 90, 95, 94, 99, 110, 105, 100, 90, 80, 75, 80, 85, 86, 88, 90, 94],
      backgroundColor: 'rgba(77, 83, 86, 0.3)',
      borderColor: '#4D5356',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//carbune
var ctx2 = document.getElementById("nuclear").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Nuclear',
      data: [40, 42, 38, 35, 44, 50, 52, 55, 54, 51, 50, 44, 40, 38, 40, 42, 35, 38, 40, 44, 43, 55, 55, 50],
      backgroundColor: 'rgba(141, 199, 63, 0.3)',
      borderColor: '#8DC73F',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//gaze
var ctx2 = document.getElementById("gaze").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Gaze',
      data: [33, 32, 30, 32, 35, 38, 40, 42, 44, 41, 37, 35, 32, 34, 34, 34, 35, 36, 37, 36, 34, 32, 30, 30],
      backgroundColor: 'rgba(255, 193, 65, .3)',
      borderColor: '#FFC141',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Hidro
var ctx2 = document.getElementById("hidro").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Hidro',
      data: [70, 75, 73, 85, 82, 83, 75, 71, 71, 65, 43, 23, 10, 20, 32, 45, 75, 80, 82, 85, 90, 75, 60, 65],
      backgroundColor: 'rgba(24, 150, 227, 0.3)',
      borderColor: '#1896E3',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Eolian
var ctx2 = document.getElementById("eolian").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Eolian',
      data: [12, 19, 3, 5, 2, 3, 10, 17, 22, 30, 36, 12, 10, 5, 12, 20, 35, 12, 10, 10, 10, 8, 10, 11],
      backgroundColor: 'rgba(213, 237, 255, 0.3)',
      borderColor: '#89ccff',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//Fotovoltaic
var ctx2 = document.getElementById("fotovoltaic").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Fotovoltaic',
      data: [4, 4, 5, 6, 5, 7, 8, 7, 8, 6, 3, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3 ],
      backgroundColor: 'rgba(9, 58, 125, 0.3)',
      borderColor: '#093A7D',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//biomasa
var ctx2 = document.getElementById("biomasa").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Biomasa',
      data: [1.2, 2.4, 1.3, 3.1, 2.9, 3.1, 2.6, 3, 1.9, 3.1, 4.6, 3.9, 3.5, 2.9, 1.9, 1.5, 1.51, 2,1, 2.9, 3, 3.6, 3, 2],
      backgroundColor: 'rgba(74, 213, 146, 0.3)',
      borderColor: '#4AD592',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//biogaz
var ctx2 = document.getElementById("biogaz").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ore,
    datasets: [{
      label: 'Biogaz',
      data: [1, 1, 1, 1, 1, 1, 1, 1.2, 1.3, 1.2, 1.1, 1.1, 1, 1, 1, 1 , 1, 0.8, 0.7, 0.6, 0.8, 1, 1, 1 ],
      backgroundColor: 'rgba(183, 191, 105, 0.3)',
      borderColor: '#B7BF69',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//stare centrala
var ctx2 = document.getElementById("totalVPP").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Ordine dispecer', 'Total VPP'],
    datasets: [{
      label: ['Puterea debitata in retea '],
      data: [50, 150],
      backgroundColor: ['rgba(66, 134, 244, 0.7)', 'rgba(35, 35, 35, 0.7)'],
      borderColor: ['#4286f4', '#232323'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//parcuri
var ctx2 = document.getElementById("parcuri").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Parc 1', 'Parc 2', 'Parc 3'],
    datasets: [{
      label: ['puterea debitata de parc '],
      data: [70, 50, 80],
      backgroundColor: ['rgba(2, 136, 209, 0.7)', 'rgba(0, 151, 167, 0.7)', 'rgba(0, 121, 107, 0.7)'],
      borderColor: ['#0288d1', '#0097a7', '#00796b'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

//surse
var ctx2 = document.getElementById("surse").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Carbune', 'Nuclear', 'Hidro', 'Fotovoltaic'],
    datasets: [{
      label: ['puterea debitata de sursa '],
      data: [70, 50, 80, 20],
      backgroundColor: ['rgba(2, 136, 209, 0.7)', 'rgba(0, 151, 167, 0.7)', 'rgba(0, 121, 107, 0.7)'],
      borderColor: ['#0288d1', '#0097a7', '#00796b'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});