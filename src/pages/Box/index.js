import React, { Component } from "react";
import api from "../../services/api";

import { MdInsertDriveFile } from "react-icons/md";

import logo from "../../assets/dropbox.svg";
import "./styles.css";

export default class Box extends Component {
  state = { box: {} };

  async componentDidMount() {
    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);

    this.setState({ box: response.data });
  }

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1>Rocktseat</h1>
        </header>

        <ul>
          <li>
            <a className="fileInfo" href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Desafio.PDF</strong>
            </a>
            <span>há 3 min atrás</span>
          </li>

          <li>
            <a className="fileInfo" href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Desafio.PDF</strong>
            </a>
            <span>há 3 min atrás</span>
          </li>
        </ul>
      </div>
    );
  }
}
