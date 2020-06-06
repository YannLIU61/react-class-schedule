const days = { "LUNDI": 1, "MARDI": 2, "MERCREDI": 3, "JEUDI": 4, "VENDREDI": 5, "SAMEDI":6, "DIMANCHE":0 };

function TimeFormator(_time, _day) {

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

export default function DataFormator(datas) {
    let res = [];
    let id = 1;
    for (let data of datas) {
        for (let uvs of data["uvs"]) {
            res.push(
                {
                    Owner: data["nom"],
                    Subject: uvs.uv + ' ' + uvs.type,
                    StartTime: TimeFormator(uvs.begin, uvs.day),
                    EndTime: TimeFormator(uvs.end, uvs.day),
                    Location: uvs.room,
                    Description: uvs.group,
                    RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1',
                    OwnerId:id
                }
            )
        }
        id++;
    }
    return res;
    // return datas.map((data) => {
    //     return data['uvs'].map((uvs => {
    //         return {
    //             Owner: data["nom"],
    //             Subject: uvs.uv + ' ' + uvs.type,
    //             StartTime: TimeFormator(uvs.begin, uvs.day),
    //             EndTime: TimeFormator(uvs.end, uvs.day),
    //             Location: uvs.room,
    //             Description: uvs.group,
    //             RecurrenceRule: 'FREQ=WEEKLY;INTERVAL=1'
    //         }
    //     }))
    // })
}
