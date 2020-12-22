import { firebaseConfig } from "./config.js";


firebase.initializeApp(firebaseConfig);




let vote = document.querySelector('input[name="language"]:checked').value;


document.addEventListener('DOMContentLoaded',
    best_language()


);


var new_poll = firebase.database();
var poll = new_poll.ref('vote/');

poll.on('child_changed', (snapshot) => {
    best_language();
});


function best_language() {
    var ref = firebase.database().ref('/vote/');
    ref.once("value")
        .then(function (snapshot) {
            var a = snapshot.child("/language/PHP").numChildren();
            var b = snapshot.child("/language/Python").numChildren();
            var d = snapshot.child("/language/Javascript").numChildren();
            var e = snapshot.child("/language/Java").numChildren();
            var f = snapshot.child("/language/C++").numChildren();
            var g = snapshot.child("/language/Go").numChildren();

            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["PHP", "Python", "Javascript", "Java", "C++", "Go"],
                    datasets: [{
                        label: 'PRESIDENT',
                        data: [a, b, c, d, e, f, g],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 99, 132)',
                            'rgb(255, 99, 132)'
                        ],

                        borderWidth: 1,


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

        });

}

