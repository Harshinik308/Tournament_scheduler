const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'scheduler',
  password: 'Harshk003@',
  port: 5432,
});
client.connect();

client.query("insert into scheduler_task(team_1,team_2,team_3,team_4,team_5,team_6,date,teamnum) values ()",(err,res)=>{
    if(!err){
     console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})
