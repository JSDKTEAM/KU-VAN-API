# KU VAN API
## Set Up database
1. เพิ่ม Database ใน xampp เลือก utf8-general_ci
2. ไปที่ config/config.example.json copy ไฟล์ config.example.json (ห้ามลบ) แล้วเปลี่ยนชื่อเป็น config.json   แก้ "database" ใน "development" เป็นชื่อ database ที่สร้างไว้
3. copy ไฟล์ .env.example (ห้ามลบ) แล้วเปลี่ยนชื่อเป็น .env เปลี่ยน DB_DATABASE เป็นชื่อ database ที่สร้างไว้
 
## Start project
1. npm install
2. npm install -g nodemon
3. npm install -g sequelize-cli
4. เปิด xampp ไปที่กดปุ่ม config ของ MySQL เลือก my.ini หา lower_case_table_names  เปลี่ยนเป็นเท่ากับ 2 
5. sequelize db:migrate
6. node insertFirstData
7. npm start