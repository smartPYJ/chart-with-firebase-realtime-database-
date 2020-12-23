import { firebaseConfig } from "./config.js";


firebase.initializeApp(firebaseConfig);

document.querySelector('button').addEventListener('click', vote);
function vote() {

    let vote = document.querySelector('input[name="language"]:checked').value;

    let firbaseRef = firebase.database().ref();
    firbaseRef.child("vote/" + "language/" + vote).push("1");
    alert(vote);

}



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
            var a = snapshot.child("/language/php").numChildren();
            var b = snapshot.child("/language/python").numChildren();
            var d = snapshot.child("/language/javascript").numChildren();
            var e = snapshot.child("/language/java").numChildren();
            var f = snapshot.child("/language/c++").numChildren();
            var g = snapshot.child("/language/go").numChildren();

            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["PHP", "Python", "Javascript", "Java", "C++", "Go"],
                    datasets: [{
                        label: 'LANGUAGES',
                        data: [a, b, d, e, f, g],
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

