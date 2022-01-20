import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import './CoinsInfo.css';
import { useNavigate } from "react-router-dom";

// To display number values with commas
export function numberWithCommas(x) {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CoinsInfo = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
    const [currency] = useState("EUR");
    const navigate = useNavigate();

    //fetch individual coin data through coin id using AXIOS
    const fetchCoinInfo = async () => {
        const { data } = await axios.get(`/coins/${id}`);
        setCoin(data);
    };

    useEffect(() => {
        fetchCoinInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // Display individual coin information
        <div className="coin-info">
            <Container>
                <Row>
                    <Col sm="10"
                        md={{ offset: 1, size: 10 }}
                        className="text-center">

                        <div className="mt-3 mb-3 coin-title">
                            <img className="coin-logo"
                                src={coin?.image.large}
                                alt={coin?.name}
                                height="70" />
                            <p className="coin-name">{coin?.name} </p><p className="text-uppercase coin-name ml-1"> ({coin?.symbol})</p>
                        </div>
                        <p className="ml-5 mr-5 coin-desc">
                            {/* ReactHtmlParser: Converts HTML strings into React elements */}
                            {ReactHtmlParser(coin?.description.en)}
                        </p>
                        <Row>
                            <Col md="4" sm="12">
                                <b>Market cap: &nbsp;</b>
                                <span> &euro; {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()])} </span>
                            </Col>
                            <Col md="4" sm="12">
                                <b>Hashing algorithm: &nbsp;</b>
                                {/* Condition: if the value is null returns NA */}

                                {coin?.hashing_algorithm == null &&
                                    < span > NA</span>
                                }
                                <span>{coin?.hashing_algorithm}</span>
                            </Col>
                            <Col md="4" sm="12">
                                <b>Genesis Date: &nbsp;</b>
                                {/* Condition: if the value is null returns NA */}

                                {coin?.genesis_date == null &&
                                    <span> NA</span>
                                }
                                <span> {coin?.genesis_date} </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12" className="mt-5 mb-5">
                                <div className="home-btn">
                                    <Button color="primary" onClick={() => navigate(`/`)}>
                                        Home Page
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CoinsInfo
