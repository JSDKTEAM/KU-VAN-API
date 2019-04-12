# KU VAN API
## Set Up database
1. เพิ่ม Database ใน xampp เลือก utf8-general_ci
2. ไปที่ config/config.example.json copy ไฟล์ config.example.json (ห้ามลบ) แล้วเปลี่ยนชื่อเป็น config.json   แก้ "database" ใน "development" เป็นชื่อ database ที่สร้างไว้
3. copy ไฟล์ .env.example (ห้ามลบ) แล้วเปลี่ยนชื่อเป็น .env เปลี่ยน DB_DATABASE เป็นชื่อ database ที่สร้างไว้
 
## Start project
1. npm install
2. sequelize db:migrate
3. ถ้า sequelize db:migrate ไม่ได้พิมพ์ npm install -g sequelize-cli
4. node insertFirstData