function Graph() {
  var ctx, data, canvas,chart;


  var setData = function() {
    var set = words.filtersArray()
    var filters = [];
    var nums = [];
    for (var i in set) {
        filters.push(set[i][0]);
        nums.push(set[i][1] * 10);
    }

    data = {
        labels: filters,
        datasets: [
            {
                label: "Incidencia",
                fillColor: "rgba(51, 102, 102, 1)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(102, 51, 51, 1)",
                highlightStroke: "rgba(220,220,220,1)",
                data: nums
            }
        ]
    };

  }

  var draw = function() {
     chart = new Chart(ctx).Bar(data);
  };


  this.show = draw;

  var _init = function() {
    
    canvas = document.getElementById("graphCanvas")
    ctx = canvas.getContext("2d");

    setData();
   
  };

  _init();
}