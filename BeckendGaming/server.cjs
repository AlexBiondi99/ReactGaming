const express = require('express')
const { Pool } = require('pg');
const cors = require('cors')
const stripe = require("stripe")('sk_test_51P2HLiRoi57u1ESVBt3EgiIe2q82ajxrTtqmsRX8WdPOz9tCpzHYK4NURXxRZXsY8eYqE12jT06ZBjXm1PYsRjqh00d3ll2HK0')

const app = express();
app.use(express.json())

//_________ stripe___________
app.use(cors({origin: '*'}))
app.post('/api/create-checkout-session', async (req, res) => {
  console.log('Body della richiesta:', req.body)
  if(!req.body || !req.body.cartItems) {
    return res.status(400).json({ error: 'Dati mancanti nel corpo della richiesta' })
  }
  const { cartItems, totalPrice } = req.body;
  console.log('status',cartItems)
  try {
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map(item => ({
        price_data: {
          currency: 'eur', 
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100, 
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: 'https://example.com/success', 
      cancel_url: 'https://example.com/cancel', 
    });
    res.json({ id: session.id });
    console.log('ID della sessione:', session.id);
  } catch (error) {
    console.error('Errore durante la creazione della sessione di checkout:', error);
    res.status(500).json({ error: 'Errore durante la creazione della sessione di checkout' });
  }
});
//___________________________

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

app.get('/api/games/:id', async (req, res) => {
    const gameId = req.params.id;
  
    try {
      const query = 'SELECT * FROM giochi WHERE id = $1'; 
      const result = await pool.query(query, [gameId]);
  
      if (result.rows.length === 1) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ message: 'Gioco non trovato' });
      }
    } catch (error) {
      console.error('Errore durante il recupero dei dati del gioco:', error);
      res.status(500).json({ error: 'Errore durante il recupero dei dati del gioco' });
    }
  });
  
  app.get('/api/games', async (req, res) => {
    try {
      const query = 'SELECT * FROM giochi';
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Errore durante il recupero dei giochi:', error);
      res.status(500).json({ error: 'Errore durante il recupero dei giochi' });
    }
  });
  app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
})