import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coins.css';
import { Container, Table, Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";

const Coins = () => {
    const [coins, setCoins] = useState([]);
    const navigate = useNavigate();

    // Get API data using AXIOS
    const fetchCoins = async () => {
        const { data } = await axios.get(`/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
        setCoins(data);
    }
    useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // Display list of coins and related data in Table format
        <div className="coin-app text-center" >
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <h1 className="mt-5">Cryptocurrency Prices</h1>
                        <div className="coin-container text-center">
                            <Container>
                                <Row>
                                    <Col md="12">
                                        <Table className="mt-5 coin" dark responsive>
                                            <thead>
                                                <tr>
                                                    <th>
                                                        #
                                                    </th>
                                                    <th>
                                                        Name
                                                    </th>
                                                    <th>
                                                        Symbol
                                                    </th>
                                                    <th>
                                                        Current Price
                                                    </th>
                                                    <th>
                                                        High 24 hour Price
                                                    </th>
                                                    <th>
                                                        Low 24 hour Price
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Mapping through API data */}
                                                {coins.map(coin => {
                                                    return (
                                                        <tr key={coin.id} onClick={() => navigate(`/coins/${coin.id}`)}>
                                                            <td>
                                                                <img src={coin.image} alt="crypto" />
                                                            </td>
                                                            <td>
                                                                <h2>{coin.name}</h2>
                                                            </td>
                                                            <td>
                                                                <span className="text-uppercase">{coin.symbol}</span>
                                                            </td>
                                                            <td>
                                                                &euro; {coin.current_price}
                                                            </td>
                                                            <td>
                                                                &euro; {coin.high_24h}
                                                            </td>
                                                            <td>
                                                                &euro; {coin.low_24h}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Container>
                        </div >
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Coins
