const db = require('./database/connection');
const sequelize = db.sequelize;
const User = db.User;
const Port = db.Port;
const Car = db.Car;
const Schedule = db.Schedule;
const Reserve = db.Reserve;
const Time = db.Time;
const TimeDefault = db.TimeDefault;

module.exports = async () => {
    User.create({
        user_id : 1,
        username:'team1234',
        fname : 'ADMIN',
        lname : 'ADMIN',
        password:'sha1$30ce46ff$1$b4790d8d39f2d27d04622f534decb80fa772b89f', //1234
        type_user : 'ADMIN',
        phoneNumber :"0890751881",
    });

    User.create({
        user_id : 2,
        username:'adminP1',
        fname : 'adminP1',
        lname : 'adminP1',
        password:'sha1$30ce46ff$1$b4790d8d39f2d27d04622f534decb80fa772b89f', //1234
        type_user : 'ADMIN',
        phoneNumber :"0890751882",
    });

    User.create({
        user_id : 3,
        username:'customer',
        fname : 'customer',
        lname : 'customer',
        password:'sha1$30ce46ff$1$b4790d8d39f2d27d04622f534decb80fa772b89f', //1234
        type_user : 'CUSTOMER',
        phoneNumber :"0890751883",
    });

    Port.create({
        port_id : 1,
        name : 'ม.เกษตรกำแพงแสน - ม.เกษตรบางเขน'
    });

    Port.create({
        port_id : 2,
        name : 'กำแพงแสน - หมอชิต 2'
    });

    Port.create({
        port_id : 3,
        name : 'กำแพงแสน - ปิ่นเกล้า'
    });

    Car.create({
        car_id : 1,
        port_id : 1,
        license_plate :'กก 1234',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 2,
        port_id : 1,
        license_plate :'กก 1235',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 3,
        port_id : 1,
        license_plate :'กก 1236',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 4,
        port_id : 1,
        license_plate :'กก 1237',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 5,
        port_id : 1,
        license_plate :'กก 1238',
        province :"กรุงเทพมหานคร"
    });

    Car.create({
        car_id : 6,
        port_id : 2,
        license_plate :'กก 1221',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 7,
        port_id : 2,
        license_plate :'กก 1222',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 8,
        port_id : 2,
        license_plate :'กก 1223',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 9,
        port_id : 2,
        license_plate :'กก 1224',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 10,
        port_id : 2,
        license_plate :'กก 1225',
        province :"กรุงเทพมหานคร"
    });

    Car.create({
        car_id : 11,
        port_id : 3,
        license_plate :'กก 1331',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 12,
        port_id : 3,
        license_plate :'กก 1332',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 13,
        port_id : 3,
        license_plate :'กก 1333',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 14,
        port_id : 3,
        license_plate :'กก 1334',
        province :"กรุงเทพมหานคร"
    });
    Car.create({
        car_id : 15,
        port_id : 3,
        license_plate :'กก 1335',
        province :"กรุงเทพมหานคร"
    });

    Schedule.create({
        schedule_id : 1,
        port_id : 1
    })
    Schedule.create({
        schedule_id : 2,
        port_id : 2
    })
    Schedule.create({
        schedule_id : 3,
        port_id : 3
    })

    TimeDefault.create({
        schedule_id : 1,
        time_out : "05.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "05.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "05.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "06.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "06.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "06.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "07.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "07.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "07.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "08.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "08.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "08.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "09.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "09.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "09.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "10.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "10.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "10.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "11.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "11.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "11.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "12.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "12.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "12.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "13.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "13.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "13.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "14.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "14.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "14.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "15.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "15.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "15.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "16.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "16.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "16.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "17.00",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "17.20",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "17.40",
    })
    TimeDefault.create({
        schedule_id : 1,
        time_out : "18.00",
    })

    TimeDefault.create({
        schedule_id : 2,
        time_out : "05.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "05.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "06.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "07.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "07.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "08.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "09.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "09.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "10.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "11.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "11.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "12.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "13.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "13.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "14.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "15.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "15.40",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "16.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "17.00",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "17.40",
    })
    TimeDefault.create({
        schedule_id :2,
        time_out : "18.20",
    })
    TimeDefault.create({
        schedule_id : 2,
        time_out : "19.00",
    })

    TimeDefault.create({
        schedule_id : 3,
        time_out : "05.00",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "05.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "06.00",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "06.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "07.10",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "07.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "08.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "09.10",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "09.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "10.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "11.10",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "11.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "12.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "13.10",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "13.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "14.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "15.10",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "15.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "16.30",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "17.10",
    })
    TimeDefault.create({
        schedule_id :3,
        time_out : "17.50",
    })
    TimeDefault.create({
        schedule_id : 3,
        time_out : "18.30",
    })

    
};