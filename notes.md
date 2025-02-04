dua data base
    **FK** Ruang Meeting

npx sequelize model:create --name BookedRoom --attributes unit:string,MeetingRoom_ID:integer,tanggalRapat:date,waktu:string,jumlahPeserta:string,jenisKonsumsi:string
npx sequelize seed:create --name seed--BookedRoom


pesanan ruang meeting 

list ruang meeting
    RuangMeeting
    Kapasitas

npx sequelize model:create --name MeetingRoom --attributes name:string,capacity:number
npx sequelize seed:create --name seed--MeetingRoom