const express = require('express')
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ReactGaming',
  password: 'root',
  port: 5432,
});

pool.connect((err,client,release) => {
    if(err) {
        return console.error('Errore di connessione al database',err);
    }
    console.log('La connessione ha avuto successo');
    release();
})

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
})

app.get('/', (req, res) => {
    res.send('Benvenuto su ReactGaming Server!');
  });

app.post('/signup',(req,res) => {
    const { name,surname,email,password} = req.body;

    pool.query('INSERT INTO utenti (name,surname,email,password) VALUES ($1, $2, $3, $4)', [name,surname,email,password], (err,result) => {
        if(err){
            console.error('Errore inserimento dati',err);
            res.status(500).json({error: 'Errore nel server'});
            return;
        }
        res.status(201).json({message: "Utente registrato con successo"})
    })
})

app.post('/api/login', async (req,res) => {
    const {email,password} = req.body;

    try {
        const query = 'SELECT * FROM utenti WHERE email = $1 AND password = $2';
        const result = await pool.query(query, [email, password]);

        if (result.rows.length === 1) {
            res.body = 'Login successful'
            res.status(200).json({ message: 'Login successful ' });
            console.log(res.body )
        } else {
            res.body = 'Invalid email or password'
            res.status(400).json({ message: 'Invalid email or password' });
            console.log(res.body );
            throw new Error('errore durante il login')
        }
    } catch (error) {
        console.error('Errore durante il login:', error);
        res.status(500).json({ error: 'Errore durante il login' });
    }
})