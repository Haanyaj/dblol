import { Card, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Page from '../Page';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API_KEY } from './const';
import { TrainRounded } from '@material-ui/icons';

const SummonerRow = ({joueur, name, region }) => {
  const [summonerData, setSummonerData] = useState({});

  useEffect(() => {
    const fetchSummoner = async () => {
      try {
        const response = await fetch(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}${API_KEY}`);
        const data = await response.json();
        const summon_id = data.id;
        const fetchSummonerData = async () => {
          try {
            const response = await fetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summon_id}${API_KEY}`);
            const res = await response.json();
            if (res[0].queueType ==  "RANKED_SOLO_5x5") {
                setSummonerData(res[0]);
            } else if (res[1].queueType ==  "RANKED_SOLO_5x5"){ 
              setSummonerData(res[1]);
            }
          } catch (error) {
          }
        };
        fetchSummonerData();
      } catch (error) {
      }
    };
    fetchSummoner();
  }, [name]);

  const rankImg = `/dblol/img/${summonerData.tier}.png`;

  return (
    <TableRow sx={{ 'td, th': { border: 0, color: 'white' } }}>
      <TableCell component="th" scope="row">
        {joueur}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right"> {summonerData?.tier && <img src={rankImg}  style={{ height: '1.5rem', marginRight: '0.5rem' }} />}{summonerData?.tier} {summonerData?.rank}</TableCell>
      <TableCell align="right">{summonerData?.wins}</TableCell>
      <TableCell align="right">{summonerData?.losses}</TableCell>
      <TableCell align="right">{summonerData?.leaguePoints}</TableCell>
   </TableRow>
  );
};

const Home = () => {
  const players = [
    { joueur: "Alvyn", name: "IvanJBCK", region: "euw1" },
    { joueur: "Victor", name: "Treqz", region: "na1"  },
    { joueur: "Sesses", name: "SessesYT" , region: "euw1" },
    { joueur: "Adil", name: "If it rains" , region: "euw1" },
    { joueur: "Remi", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Khaled", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Matt", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Kylian", name: "Wheyn" , region: "euw1" },
    { joueur: "Toji", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Akoura", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Joker", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Aizenflop", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Serkan", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Fatih", name: "IvanJBCK" , region: "euw1" },
    { joueur: "Berka", name: "IvanJBCK" , region: "euw1" },
  ];
  

  return (
    <Page title="DB Ranking">
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, bgcolor: '#2F4F4F' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Player</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Summoner Name</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">Rank</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">W</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">L</TableCell>
                <TableCell sx={{ color: 'white' }} align="right">LP</TableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((players) => (
                <SummonerRow key={players.name} name={players.name} joueur= {players.joueur} region = {players.region}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Page>
  );
};

export default Home;
