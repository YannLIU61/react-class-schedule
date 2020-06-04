// [{
//     Id: 2,
//     Subject: 'Paris',
//     StartTime: new Date(2020, 6, 1, 10, 0),
//     EndTime: new Date(2020, 6, 1, 12, 0),
//     IsAllDay: false,
//     RecurrenceRule: 'FREQ=WEEKLY;',
// },
// {
//     Id: 3,
//     Subject: 'Shanghai',
//     StartTime: new Date(2020, 6, 1, 10, 0),
//     EndTime: new Date(2020, 6, 1, 12, 30),
//     IsAllDay: false,
//     RecurrenceRule: 'FREQ=WEEKLY;',
// }];
// {
//     "uv": "GE37",
//     "type": "TD",
//     "day": "VENDREDI",
//     "begin": "10:15",
//     "end": "13:15",
//     "room": "RO128   ",
//     "group": "Groupe 7"

//   }
function TimeFormator(_time, _day) {

    var days = { "LUNDI": 1, "MARDI": 2, "MERCREDI": 3, "JEUDI": 4, "VENDREDI": 5 };
    var today = new Date()

    var date = today.getDate();

    var hour = _time.split(':')[0];
    var minute = _time.split(':')[1];
    var day = today.getDay();

    today.setHours(hour);
    today.setMinutes(minute);
    today.setDate(date - 7 + days[_day] - day);

    return today;
}

export default function DataFormator(uvs) {
    return uvs.map((uv) => {
        return {
            Id: 1,
            Subject: uv.uv + ' ' + uv.type,
            StartTime: TimeFormator(uv.begin, uv.day),
            EndTime: TimeFormator(uv.end, uv.day),
            Location: uv.room,
            description: uv.group,
            RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
        }
    })
}